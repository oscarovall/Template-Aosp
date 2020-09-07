import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-pagination-table',
  templateUrl: './pagination-table.component.html',
  styleUrls: ['./pagination-table.component.scss']
})
export class PagePaginationTableComponent implements OnInit {
	private url: string;
	rows: Array<any>;
	itemsPerPage: number;

	constructor( private sv: DataService ) {
		this.url = '../../../../assets/data/pagination-table-data.json';
		this.rows = [];
		this.itemsPerPage = 5;
	}

	public getData(url: string) {
		let observer = {
			next: x => this.rows = x,
			error: err => this.sv.handleError(err)
		};
		this.sv.getData(url).subscribe(observer);
	}

	ngOnInit() {
		this.getData(this.url);
	}
}
