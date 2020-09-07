import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-textareas',
  templateUrl: './textareas.component.html',
  styleUrls: ['./textareas.component.scss']
})
export class PageTextareasComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initReactiveForm();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      field: ['Textarea value']
    });
  }
}
