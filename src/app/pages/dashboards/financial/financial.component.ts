import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class PageFinancialComponent implements OnInit {
	private url: string;
  columns: Array<any>;
  data: Array<any>;
  rows: Array<any>;
  rows2: Array<any>;
  config: any;
  linearData1: Array<any>;
  linearData2: Array<any>;
  colorScheme: any;
  colorScheme2: any;
  curve: any;

  constructor( private sv: DataService ) {
		this.url = '../../../../assets/data/pagination-table-data.json';
    this.rows = [];
    this.config = {
      sorting: { columns: this.columns },
      filtering: { filterString: '' }
    };
    this.colorScheme = {
      domain: ['#e24d4d', '#0941fd', '#50BD35']
    };
    this.colorScheme2 = {
      domain: ['#ff8534', '#50BD35']
    };
    this.curve = shape.curveCardinal;
  }

  ngOnInit() {
		this.getData(this.url);
    this.linearData1 = [
      {
        name: 'Sales',
        series: [
          {
            value: 1208,
            name: 'Monday'
          },
          {
            value: 1859,
            name: 'Tuesday'
          },
          {
            value: 4680,
            name: 'Wednesday'
          },
          {
            value: 5400,
            name: 'Thursday'
          },
          {
            value: 7507,
            name: 'Friday'
          },
          {
            value: 8736,
            name: 'Saturday'
          },
          {
            value: 10230,
            name: 'Sunday'
          }
        ]
      }
    ];
    this.linearData2 = [
      {
        name: 'Payouts',
        series: [
          {
            value: 1208,
            name: 'Monday'
          },
          {
            value: 2859,
            name: 'Tuesday'
          },
          {
            value: 2345,
            name: 'Wednesday'
          },
          {
            value: 4704,
            name: 'Thursday'
          },
          {
            value: 7507,
            name: 'Friday'
          },
          {
            value: 8736,
            name: 'Saturday'
          },
          {
            value: 7305,
            name: 'Sunday'
          }
        ]
      }
    ];
	}

  public getData(url: string) {
    const OBSERVER = {
      next: x => (this.rows = x),
      error: err => this.sv.handleError(err),
      complete: () => (this.rows2 = this.rows.slice(0, 3))
		};
		this.sv.getData(url).subscribe(OBSERVER);
	}
}
