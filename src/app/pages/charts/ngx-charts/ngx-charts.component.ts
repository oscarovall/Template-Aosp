import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'page-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class PageNgxChartsComponent implements OnInit {
	single: any[];
	multi: any[];
	single1: any[];
  multi1: any[];

  // options
  showXAxisLabel:boolean;
  showYAxisLabel:boolean;
  showXAxis: boolean;
  showYAxis:boolean;
  gradient:boolean;
  showLegend:boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  colorScheme;

  constructor() {
		this.showXAxis = true;
		this.showYAxis = true;
		this.gradient = false;
		this.showLegend = true;
		this.showXAxisLabel = true;
		this.xAxisLabel = 'Country';
		this.showYAxisLabel = true;
		this.yAxisLabel = 'Population';
		this.colorScheme = {
			domain: ['#e24d4d', '#E22A6F', '#50BD35', '#AAAAAA', '#ff6df5']
		};

    this.single = [
			{
				'name': 'Germany',
				'value': 8940000
			},
			{
				'name': 'USA',
				'value': 5000000
			},
			{
				'name': 'France',
				'value': 7200000
			}
		];
		
		this.multi = [
			{
				'name': 'Germany',
				'series': [
					{
						'name': '2010',
						'value': 7300000
					},
					{
						'name': '2011',
						'value': 8940000
					}
				]
			},
		
			{
				'name': 'USA',
				'series': [
					{
						'name': '2010',
						'value': 7870000
					},
					{
						'name': '2011',
						'value': 8270000
					}
				]
			},
		
			{
				'name': 'France',
				'series': [
					{
						'name': '2010',
						'value': 5000002
					},
					{
						'name': '2011',
						'value': 5800000
					}
				]
			}
		];
		this.single1 = [
			{
				'name': 'Rwanda ',
				'value': 8940
			},
			{
				'name': 'Columbia',
				'value': 5000
			},
			{
				'name': 'New Caledonia',
				'value': 7200
			},
			{
				'name': 'Timor-Leste ',
				'value': 4300
			},
			{
				'name': 'Equatorial Guinea',
				'value': 2500
			}
		];
		this.multi1 = [
			{
				'name': 'Rwanda',
				'series': [
					{
						'name': '2016',
						'value': 7300
					},
					{
						'name': '2017',
						'value': 8940
					}
				]
			},
			{
				'name': 'Columbia',
				'series': [
					{
						'name': '2016',
						'value': 7870
					},
					{
						'name': '2017',
						'value': 8270
					}
				]
			},
			{
				'name': 'New Caledonia',
				'series': [
					{
						'name': '2016',
						'value': 7870
					},
					{
						'name': '2017',
						'value': 2270
					}
				]
			},
			{
				'name': 'Timor-Leste ',
				'series': [
					{
						'name': '2016',
						'value': 5000
					},
					{
						'name': '2017',
						'value': 5800
					}
				]
			}
		];
  }

  ngOnInit() { }
}
