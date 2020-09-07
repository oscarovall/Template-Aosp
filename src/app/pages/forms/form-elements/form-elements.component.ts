import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { IOption } from '../../../ui/interfaces/option';

@Component({
  selector: 'page-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class PageFormElementsComponent implements OnInit {
  data: string[];
  url: string;
  selectData: IOption;
  selectDataUrl: string;

	constructor(private dataSv: DataService) {
    this.url = '../../../../assets/data/autocomplete-data.json';
    this.selectDataUrl = '../../../../assets/data/options.json';
    this.data = [];
	}

  ngOnInit() {
    this.getData(this.url);
    this.getSelectData(this.selectDataUrl);
  }

  getData(url: string) {
    let observer = {
      next: x => this.data = x,
      error: err => this.dataSv.handleError(err)
    };
    this.dataSv.getData(url).subscribe(observer);
  }

  getSelectData(url: string) {
    let observer = {
      next: x => this.selectData = x,
      error: err => this.dataSv.handleError(err)
    };
    this.dataSv.getData(url).subscribe(observer);
  }
}
