import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-analytical',
  templateUrl: './analytical.component.html',
  styleUrls: ['./analytical.component.scss']
})
export class PageAnalyticalComponent implements OnInit {
  chartData1: any[];
  chartData2: any[];
  chartData3: any[];
  chartData4: any[];
  chartData5: any[];
  chartData6: any[];
  chartData7: any[];
  mainColor: any;
  colorScheme: any;
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

  constructor() {
    this.mainColor = {
      domain: ['#FF8534']
    };
    this.colorScheme = {
			domain: ['#e24d4d', '#FF8534', '#50bd35']
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
        backgroundColor: '#FF8534'
      },
      {
        backgroundColor: '#64b5f6'
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
        borderColor: '#e24d4d',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#e24d4d',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#e24d4d'
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
        borderColor: '#81c784',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#81c784',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#81c784'
      }
    ];
  }

  ngOnInit() {
    this.chartData1 = [
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
        'name': 'Italy',
        'value': 135
      }
    ];
    this.chartData2 = [
      {
        'name': 'Germany',
        'value': 112
      },
      {
        'name': 'USA',
        'value': 100
      }
    ];
    this.chartData3 = [{
      'name': 'Viewers',
      'series': [
        {
          'value': 992,
          'name': 'Monday'
        },
        {
          'value': 3859,
          'name': 'Tuesday'
        },
        {
          'value': 5906,
          'name': 'Wednesday'
        },
        {
          'value': 3305,
          'name': 'Thursday'
        },
        {
          'value': 7507,
          'name': 'Friday'
        },
        {
          'value': 5415,
          'name': 'Saturday'
        },
        {
          'value': 1200,
          'name': 'Sunday'
        }
      ]
    }];
    this.chartData4 = [
      {
        'name': 'Sales',
        'value': 73
      },
      {
        'name': 'In-store sales',
        'value': 37
      }
    ];
    this.chartData5 = [
      {
        'name': 'Income',
        'series': [
          {
            'value': 2850,
            'name': 'Monday'
          },
          {
            'value': 3959,
            'name': 'Tuesday'
          },
          {
            'value': 5906,
            'name': 'Wednesday'
          },
          {
            'value': 3805,
            'name': 'Thursday'
          },
          {
            'value': 6354,
            'name': 'Friday'
          },
          {
            'value': 4415,
            'name': 'Saturday'
          }
        ]
      },
      {
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
      },
      {
        'name': 'Total',
        'series': [
          {
            'value': 1850,
            'name': 'Monday'
          },
          {
            'value': 1759,
            'name': 'Tuesday'
          },
          {
            'value': 4906,
            'name': 'Wednesday'
          },
          {
            'value': 2580,
            'name': 'Thursday'
          },
          {
            'value': 4954,
            'name': 'Friday'
          },
          {
            'value': 2815,
            'name': 'Saturday'
          }
        ]
      }
    ];
    this.chartData6 = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Direct' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Referral' }
    ];
    this.chartData7 =[
      { data: [92, 83, 80, 81, 56, 55, 30], label: 'Site A' },
      { data: [28, 48, 50, 62, 65, 70, 90], label: 'Site B' },
      { data: [18, 48, 77, 9, 100, 27, 40], label: 'Site C' }
    ];
  }
}
