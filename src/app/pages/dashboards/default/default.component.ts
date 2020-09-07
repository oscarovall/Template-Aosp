import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import * as shape from 'd3-shape';
import { ITodoItem } from '../../../ui/interfaces/todoItem';
import { IUser } from '../../../ui/interfaces/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'page-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class PageDefaultComponent implements OnInit {
  productsDataUrl: string;
  todoDataUrl: string;
  todoData: Array<ITodoItem>;
  mainColor: any;
  colorScheme: any;
  chartData1: Array<any>;
  chartData2: Array<any>;
  chartData3: Array<any>;
  barChartOptions: any;
  barChartLabels: Array<string>;
  barChartType: string;
  barChartLegend: boolean;
  barChartColors: any[];
  lineChartOptions: any;
  lineChartLegend: boolean;
  lineChartType: string;
  lineChartLabels: any[];
  lineChartColors: any[];
  products: Array<any>;
  curve: any;
  userData: IUser;

  constructor(private dataSv: DataService, private userService: UserService) {
    this.productsDataUrl = '../../../../assets/data/table-recent-orders.json';
    this.mainColor = {
			domain: ['#ff6a07']
    };
    this.colorScheme = {
			domain: ['#e24d4d', '#ff6a07', '#50BD35']
    };
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      scales: {
        yAxes: [{
          color: '#fff',
          ticks: {
            beginAtZero: true,
            fontColor: '#fff'
          },
        }],
        xAxes: [{
          color: '#fff',
          ticks: {
            fontColor: '#fff'
          },
        }]
      }
    };
    this.barChartLabels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    this.barChartType = 'bar';
    this.barChartLegend = false;
    this.barChartColors = [
      {
        backgroundColor: '#64b5f6'
      },
      {
        backgroundColor: '#FF8534'
      }
    ];
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.lineChartOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          color: '#fff',
          ticks: {
            beginAtZero: true,
            fontColor: '#fff'
          },
        }],
        xAxes: [{
          color: '#fff',
          ticks: {
            fontColor: '#fff'
          },
        }]
      }
    };
    this.lineChartLegend = false;
    this.lineChartType = 'line';
    this.lineChartColors = [
      {
        backgroundColor: 'transparent',
        borderColor: '#e2829c',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#e2829c',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#e2829c'
      },
      {
        backgroundColor: 'transparent',
        borderColor: '#FF8534',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#FF8534',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#FF8534'

      },
      {
        backgroundColor: 'transparent',
        borderColor: '#64b5f6',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#64b5f6',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#64b5f6'
      }
    ];
    this.products = [];
    this.curve = shape.curveCardinal;
    this.todoData = [];
    this.todoDataUrl = '../../../../assets/data/todo-dashboard.json';
    this.userData = {
      "name": "Charles Sutton",
      "tag": "company",
      "email": "charlie@mail.com",
      "img": "../../../../assets/content/avatar-176-10.jpg",
      "role": "Designer",
      "phone": "0987654321",
      "location": "Manchester",
      "birthDate": "April 7",
      "labels": [
        "Competitors"
      ]
    }
  }

  ngOnInit() {
    this.getProductsData(this.productsDataUrl);
    this.getTodoData(this.todoDataUrl);

    this.chartData1 = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Direct' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Referral' }
    ];
    this.chartData2 =[
      { data: [92, 83, 80, 81, 56, 55, 30], label: 'Site A' },
      { data: [28, 48, 50, 62, 65, 70, 90], label: 'Site B' },
      { data: [18, 48, 77, 9, 100, 27, 40], label: 'Site C' }
    ];
    this.chartData3 = [
      {
        'name': 'Women bags',
        'value': 64
      },
      {
        'name': 'Women shoes',
        'value': 22
      },
      {
        'name': 'Accessories',
        'value': 14
      }
    ];
  }

  getProductsData(url: string) {
    const OBSERVER = {
      next: x => this.products = x,
      error: err => this.dataSv.handleError(err)
    };

    this.dataSv.getData(url).subscribe(OBSERVER);
  }

  getTodoData(url: string) {
    let items: Array<ITodoItem> = [];

    const OBSERVER = {
      next: x => items = x,
      error: err => this.dataSv.handleError(err),
      complete: () => this.todoData = items
    };
    this.dataSv.getData(url).subscribe(OBSERVER);
  }
}
