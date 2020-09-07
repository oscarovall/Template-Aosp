import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class PageSlidersComponent implements OnInit {
	range: number[];
  reactiveForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.range = [20, 50];
	 }

  ngOnInit() {
    this.initReactiveForm();
  }

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      field: [52]
    });
  }
}
