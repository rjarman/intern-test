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

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private ngZone: NgZone
  ) {
    this.titleService.setTitle('ACP | Create Form');
    this.charLeft = 200;
  }

  ngOnInit(): void {
    this.formDesc = document.getElementById('formDesc') as HTMLTextAreaElement;
    this.questionForm = this.formBuilder.group({
      title: ['', Validators.required],
      desc: [''],
    });
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

  save(): void {}
}
