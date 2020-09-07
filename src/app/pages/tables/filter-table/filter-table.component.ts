import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class PageFilterTableComponent implements OnInit {
	private url: string;
	columns: Array<any>;
	rows: Array<any>;
	config: any;

  constructor(private sv: DataService) {
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
		const OBSERVER = {
			next: x => this.rows = x,
			error: err => this.sv.handleError(err)
		};

		this.sv.getData(url).subscribe(OBSERVER);
	}

  ngOnInit() {
		this.getData(this.url);
	}
}
