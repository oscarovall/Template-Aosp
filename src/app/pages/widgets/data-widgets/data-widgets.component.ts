import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ITodoItem } from '../../../ui/interfaces/todoItem';

@Component({
  selector: 'page-data-widgets',
  templateUrl: './data-widgets.component.html',
  styleUrls: ['./data-widgets.component.scss']
})
export class PageDataWidgetsComponent implements OnInit {
	private url: string;
	private usersUrl: string;
	private ordersUrl: string;
	private productsUrl: string;

	linearData: Array<any>;
	linearData2: Array<any>;
	linearData3: Array<any>;

	columns: Array<any>;
	tableData: Array<any>;
	orders: Array<any>;
	products: Array<any>;
	rows: Array<any>;
	config: any;

	data: Array<ITodoItem>;
	mainColor: any;

  constructor( private sv: DataService ) {
		this.url = '../../../../assets/data/todo-items.json';
		this.usersUrl = '../../../../assets/data/table-users.json';
		this.ordersUrl = '../../../../assets/data/table-orders.json';
		this.productsUrl = '../../../../assets/data/table-products.json';
    this.mainColor = {
			domain: ['#FF8534']
		};
		this.rows = [];
		this.orders = [];
		this.products = [];
		this.config = {
  	  sorting: {columns: this.columns},
			filtering: {
				filterString: ''
			}
		};

		this.data = [];
		this.linearData = [
			{
				'name': 'Germany',
				'value': 112
			},
			{
				'name': 'USA',
				'value': 100
			},
			{
				'name': 'France',
				'value': 122
			},
			{
				'name': 'Canada',
				'value': 144
			},
			{
				'name': 'UK',
				'value': 112
			},
			{
				'name': 'Ukraine',
				'value': 100
			},
			{
				'name': 'Russia',
				'value': 135
			}
		];

		this.linearData2 = [{
			'name': 'Expecies',
			'series': [
				{
					'value': 1030,
					'name': 'Monday'
				},
				{
					'value': 3376,
					'name': 'Tuesday'
				},
				{
					'value': 4205,
					'name': 'Wednesday'
				},
				{
					'value': 1505,
					'name': 'Thursday'
				},
				{
					'value': 3654,
					'name': 'Friday'
				},
				{
					'value': 1915,
					'name': 'Saturday'
				}
			]
		}];
		
		this.linearData3 = [
			{
				'name': 'Expecies',
				'series': [
					{
						'value': 2030,
						'name': 'Monday'
					},
					{
						'value': 3376,
						'name': 'Tuesday'
					},
					{
						'value': 4205,
						'name': 'Wednesday'
					},
					{
						'value': 3505,
						'name': 'Thursday'
					},
					{
						'value': 3654,
						'name': 'Friday'
					},
					{
						'value': 4915,
						'name': 'Saturday'
					}
				]
			}
		];
	 }

  ngOnInit() {
		let todoObserver = {
			next: x => this.data = x,
			error: err => this.sv.handleError(err)
		};
		let usersObserver = {
			next: x => this.rows = x,
			error: err => this.sv.handleError(err)
		};
		let ordersObserver = {
			next: x => this.orders = x,
			error: err => this.sv.handleError(err)
		};
		let productsObserver = {
			next: x => this.products = x,
			error: err => this.sv.handleError(err)
		};
		this.sv.getData(this.url).subscribe(todoObserver);
		this.sv.getData(this.usersUrl).subscribe(usersObserver);
		this.sv.getData(this.ordersUrl).subscribe(ordersObserver);
		this.sv.getData(this.productsUrl).subscribe(productsObserver);
  }
}
