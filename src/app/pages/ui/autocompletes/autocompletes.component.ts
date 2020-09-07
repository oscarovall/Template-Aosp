import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-autocompletes',
  templateUrl: './autocompletes.component.html',
  styleUrls: ['./autocompletes.component.scss']
})
export class PageAutocompletesComponent implements OnInit {
	data: Array<String>;
  url: string;
  reactiveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataSv: DataService
  ) {
    this.url = 'assets/data/autocomplete-data.json';
    this.data = [];
  }

  ngOnInit() {
		this.getData(this.url);

    this.initReactiveForm();
	}

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      field: ['Brazil']
    });
  }

  getData(url: string) {
    let observer = {
      next: x => this.data = x,
      error: err => this.dataSv.handleError(err)
    };
    this.dataSv.getData(url).subscribe(observer);
  }
}
