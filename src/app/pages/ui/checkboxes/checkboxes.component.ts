import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class PageCheckboxesComponent implements OnInit {
  reactiveForm: FormGroup;
	value1: FormControl;
	value2: FormControl;
	value3: FormControl;
	
  constructor(private formBuilder: FormBuilder) {
		this.value1 = new FormControl(false);
		this.value2 = new FormControl(true);
		this.value3 = new FormControl(false);
	}

  ngOnInit() {
  	this.initReactiveForm();
	}

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      checkboxField: [true]
    });
  }
}
