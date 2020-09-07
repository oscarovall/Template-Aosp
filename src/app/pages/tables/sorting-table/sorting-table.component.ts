import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-sorting-table',
  templateUrl: './sorting-table.component.html',
  styleUrls: ['./sorting-table.component.scss']
})
export class PageSortingTableComponent implements OnInit {
	private url: string;
	columns: Array<any>;
	data: Array<any>;
	rows: Array<any>;
	config: any;

	constructor( private sv: DataService ) {
		this.url = '../../../../assets/data/table-users.json';
		this.rows = [];
		this.config = {
  	  sorting: {columns: this.columns},
			filtering: {
				filterString: ''
			}
		};
	}

	public getData(url: string) {
		let observer = {
			next: x => this.rows = x,
			error: err => this.sv.handleError(err)
		}
		this.sv.getData(url).subscribe(observer);
	}

  ngOnInit() {
		this.getData(this.url);
	}
}
