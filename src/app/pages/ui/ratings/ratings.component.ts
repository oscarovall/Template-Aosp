import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class PageRatingsComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initReactiveForm();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      field: [4]
    });
  }
}
