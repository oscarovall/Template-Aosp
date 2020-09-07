import { Component, OnInit } from '@angular/core';

import * as shape from 'd3-shape';

@Component({
  selector: 'page-chart-widgets',
  templateUrl: './chart-widgets.component.html',
  styleUrls: ['./chart-widgets.component.scss']
})
export class PageChartWidgetsComponent implements OnInit {
	data: Array<any>;
	data1: Array<any>;
	data2: Array<any>;
	linearData: Array<any>;
	linearData2: Array<any>;
	colorScheme: any;
	mainColor: any;
	goalsColor: any;
  curve: any;

  constructor() {
    this.curve = shape.curveCardinal;
		this.colorScheme = {
			domain: ['#FF8534', '#e24d4d', '#50BD35']
		};
		this.mainColor = {
			domain: ['#FF8534']
		};
		this.goalsColor = {
			domain: ['#e24d4d', '#FF8534']
		};
		this.data = [
			{
				'name': 'Germany',
				'value': 112
			},
			{
				'name': 'USA',
				'value': 100
			}
		];

		this.data1 = [
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

		this.data2 = [
			{
				'name': 'Sales',
				'value': 73
			},
			{
				'name': 'In-store sales',
				'value': 37
			}
		];

		this.linearData = [{
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
		
		this.linearData2 = [
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
	}

  ngOnInit() { }
}
