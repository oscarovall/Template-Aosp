import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class PageInputsComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initReactiveForm();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      field: ['Input value']
    });
  }
}
