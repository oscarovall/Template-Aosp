import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-ng2-charts',
  templateUrl: './ng2-charts.component.html',
  styleUrls: ['./ng2-charts.component.scss']
})
export class PageNg2ChartsComponent implements OnInit {
	private firstColor: string;
	private secondColor: string;
	private thirdColor: string;
	private fisrtBg: string;
	private secondBg: string;
	private thirdBg: string;

	ChartColors: any;

	lineChartData: Array<any>;
	lineChartOptions: any;
	lineChartLegend: boolean;
	lineChartType: string;
	lineChartLabels: Array<any>;

	barChartOptions: any;
	barChartLabels: Array<string>;
	barChartType: string;
	barChartLegend: boolean;
	barChartData: any[];

	doughnutChartLabels: string[];
	doughnutChartData: number[];
	doughnutChartType: string;

	radarChartLabels: string[];
	radarChartData: any;
	radarChartType: string;

	pieChartLabels: string[];
	pieChartData: number[];
	pieChartType: string;

	polarAreaChartLabels: string[];
	polarAreaChartData: number[];
	polarAreaChartType: string;
	polarAreaLegend: boolean;

  constructor() {
		this.firstColor = 'rgba(255,187,65,1)';
		this.secondColor = 'rgba(226,42,111,1)';
		this.thirdColor = 'rgba(80,189,53,1)';

		this.fisrtBg = 'rgba(255,187,65,0.2)';
		this.secondBg = 'rgba(226,42,111,0.2)';
		this.thirdBg = 'rgba(80,189,53,0.2)';

		this.lineChartData =[
			{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
			{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
			{ data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
		];

		this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
		this.lineChartOptions = {
			responsive: true
		};

		this.ChartColors = [
			{
				backgroundColor: 'rgba(255,187,65,0)',
				borderColor: 'rgba(255,187,65,1)',
				pointBackgroundColor: 'rgba(255,187,65,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(255,187,65,1)'
			},
			{
				backgroundColor: 'rgba(226,42,111,0)',
				borderColor: 'rgba(226,42,111,1)',
				pointBackgroundColor: 'rgba(226,42,111,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(226,42,111,1)'

			},
			{
				backgroundColor: 'rgba(80,189,53,0)',
				borderColor: 'rgba(80,189,53,1)',
				pointBackgroundColor: 'rgba(80,189,53,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(80,189,53,1)'
			}
		];
		this.lineChartLegend = true;
		this.lineChartType = 'line';

		this.barChartOptions = {
			scaleShowVerticalLines: false,
			responsive: true
		};

		this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
		this.barChartType = 'bar';
		this.barChartLegend = true;

		this.barChartData = [
			{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
			{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
		];

		this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
		this.doughnutChartData = [350, 450, 100];
		this.doughnutChartType = 'doughnut';

		this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
		this.radarChartData = [
		{ data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
		];
		this.radarChartType = 'radar';

		this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
		this.pieChartData = [300, 500, 100];
		this.pieChartType = 'pie';

		this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
		this.polarAreaChartData = [300, 500, 100, 40, 120];
		this.polarAreaChartType = 'polarArea';
		this.polarAreaLegend = true;
	 }

  ngOnInit() { }
}
