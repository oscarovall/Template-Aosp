import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-simple-tables',
  templateUrl: './simple-tables.component.html',
  styleUrls: ['./simple-tables.component.scss']
})
export class PageSimpleTablesComponent implements OnInit {
	private url: string;
  columns: Array<any>;
  rows: Array<any>;
  rows2: Array<any>;
	config: any;

  constructor( private sv: DataService ) {
		this.url = '../../../../assets/data/table-users.json';
    this.rows = [];
    this.rows2 = [];
    this.config = {
      sorting: { columns: this.columns },
      filtering: {
        filterString: ''
      }
    };
	}

	public getData(url: string) {
		let observer = {
			next: x => this.rows = x,
			error: err => this.sv.handleError(err),
			complete: () => this.rows2 = this.rows.slice(0, 3)
		};
		this.sv.getData(url).subscribe(observer);
	}

  ngOnInit() {
		this.getData(this.url);
	}
}
