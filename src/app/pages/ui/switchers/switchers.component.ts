import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-switchers',
  templateUrl: './switchers.component.html',
  styleUrls: ['./switchers.component.scss']
})
export class PageSwitchersComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initReactiveForm();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      switcherField: [true]
    });
  }
}
