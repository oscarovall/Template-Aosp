import { Component, OnInit } from '@angular/core';

import { IInvoice } from '../../../ui/interfaces/invoice';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class PageInvoiceComponent implements OnInit {
	invoiceCode: string;
	invoiceDate: Date;
	dueDate: Date;

	tableData: Array<IInvoice>;
	config: any;
	subTotalCost: number;
	tax: number;
	grandTotalCost: number;
	url: string;
	columns: Array<any>;

  constructor( private dataSv: DataService ) {
		this.url = '../../../../assets/data/invoice-data.json';
		this.tableData = [];
		this.tax = 0.05;
		this.config = {
			sorting: { columns: this.columns },
			filtering: {
				filterString: ''
			}
		};

		this.invoiceCode = 'INV-165';
		this.invoiceDate = new Date(new Date(2018, 6, 17).toDateString());
		this.dueDate = new Date(2018, 6, 22);
	}

	getData(url: string) {
		let observer = {
			next: x => this.tableData = x,
			error: err => this.dataSv.handleError(err),
			complete: () => this.getTotalCost()
		};
		this.dataSv.getData(url).subscribe(observer);
	}

	getTotalCost() {
		let total: number = 0;
		this.tableData.forEach((col: IInvoice) => {
			total += col.quantity * col.unitCost;
		});
		this.subTotalCost = total;
		this.grandTotalCost = total + total * this.tax;
	}

  ngOnInit() {
		this.getData(this.url);
  }
}
