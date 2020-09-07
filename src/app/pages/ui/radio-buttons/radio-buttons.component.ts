import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class PageRadioButtonsComponent implements OnInit {
  reactiveForm: FormGroup;
	radioBtn: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initReactiveForm();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      field: ['first']
    });
  }
}
