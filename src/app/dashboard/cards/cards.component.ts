import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() public cardType: string;
  @Input() public question: string;
  @Output() sendParent = new EventEmitter<any>();
  shortTextForm: FormGroup;
  selectedType: string;
  isCopyEn = false;
  isDeleteEn = false;
  isAdd = false;

  constructor(private formBuilder: FormBuilder) {
    this.selectedType = 'shortText';
  }

  ngOnInit(): void {
    this.shortTextForm = this.formBuilder.group({
      question: ['', [Validators.required]],
    });

    if (this.question) {
      this.shortTextForm.controls.question.setValue(this.question);
    }
  }

  emit(): void {
    this.sendParent.emit(this.shortTextForm.value.question);
  }
}
