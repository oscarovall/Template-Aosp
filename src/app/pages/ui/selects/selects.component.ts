import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { IOption } from '../../../ui/interfaces/option';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class PageSelectsComponent implements OnInit {
	data: IOption;
	url: string;
  reactiveForm: FormGroup;
	
  constructor(
    private dataSv: DataService,
    private formBuilder: FormBuilder
  ) {
		this.url = 'assets/data/options.json';
	}

	getData(url: string) {
		let observer = {
			next: x => this.data = x,
			error: err => this.dataSv.handleError(err)
		};
		this.dataSv.getData(url).subscribe(observer);		
	}

  ngOnInit() {
    this.getData(this.url);

    this.initReactiveForm();
	}

  initReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      singleSelect: ['OPT3'],
      multipleSelect: [['OPT2', 'OPT4']]
    });
  }
}
