import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Title } from '@angular/platform-browser';
import { Database, ShortText } from 'src/app/type';
import { ServerService } from 'src/app/server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, AfterViewInit {
  questionForm: FormGroup;
  charLeft: number;
  formDesc: HTMLTextAreaElement;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  formData: Database<ShortText>;
  date: Date;
  id = '';
  btnName = 'Save';
  question: string;
  frmName = 'Add';
  isUpdate = false;
  childData: string;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private ngZone: NgZone,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute
  ) {
    this.titleService.setTitle('ACP | Create Form');
    this.charLeft = 200;
    this.date = new Date();
  }

  ngOnInit(): void {
    this.formDesc = document.getElementById('formDesc') as HTMLTextAreaElement;
    this.questionForm = this.formBuilder.group({
      title: ['', Validators.required],
      desc: [''],
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.formData = this.serverService.getData(this.id)[0];
      this.questionForm.controls.title.setValue(this.formData.title);
      this.questionForm.controls.desc.setValue(this.formData.description);
      this.btnName = 'Update';
      this.frmName = 'Update';
      this.isUpdate = true;
      this.question = this.formData.question.question;
      this.titleService.setTitle('ACP | Update Form');
    } else {
      this.isUpdate = false;
    }
  }

  ngAfterViewInit(): void {
    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.formDesc.addEventListener('input', () => {
      this.charLeft = 200 - this.formDesc.value.length;
    });
  }

  triggerResize(): void {
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  setData(data): void {
    this.childData = data;
  }

  save(): void {
    if (this.id) {
      this.formData.question.question = this.childData
        ? this.childData
        : this.formData.question.question;
      this.formData = {
        id: this.formData.id,
        title: this.questionForm.value.title,
        description: this.questionForm.value.desc,
        date: this.formData.date,
        updateDate: `${this.date.getUTCDate()}-${
          this.date.getUTCMonth() + 1
        }-${this.date.getUTCFullYear()}`,
        question: {
          question: this.formData.question.question,
        },
      };
      this.serverService.update(this.formData);
    } else {
      this.formData = {
        id: URL.createObjectURL(new Blob([])).split('/').slice(-1)[0],
        title: this.questionForm.value.title,
        description: this.questionForm.value.desc,
        date: `${this.date.getUTCDate()}-${
          this.date.getUTCMonth() + 1
        }-${this.date.getUTCFullYear()}`,
        updateDate: `${this.date.getUTCDate()}-${
          this.date.getUTCMonth() + 1
        }-${this.date.getUTCFullYear()}`,
        question: {
          question: this.childData,
        },
      };
      this.serverService.save(this.formData);
    }
  }
}
