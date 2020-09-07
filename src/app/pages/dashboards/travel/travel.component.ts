import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class PageTravelComponent implements OnInit {
	mainColor: any;
	chartData: Array<any>;
	curve: any;
	lineChartOptions: any;
  constructor() {
		this.lineChartOptions = {
			responsive: true,
			fill: true,
			scales: {
				xAxes: [
					{
						display: false
					}
				],
				yAxes: [
					{
						display: false
					}
				],
			}
		};
	}

  ngOnInit() {
		this.mainColor = [
			{
				backgroundColor: 'rgba(6, 30, 56,0.5)',
				borderColor: 'rgba(255, 133, 52,0)',
			}
		];
		this.chartData = [
			{ data: [35, 89, 15], label: 'Series A' },
		];
  }

}
