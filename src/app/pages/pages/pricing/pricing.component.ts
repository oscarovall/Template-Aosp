import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { IPricing } from '../../../ui/interfaces/pricing';

@Component({
  selector: 'page-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PagePricingComponent implements OnInit {
	data: IPricing[];
	coloredData: IPricing[];
	url: string;
	coloredUrl: string;

  constructor(private dataSv: DataService) {
		this.url = '../../../../assets/data/pricing-data.json';
		this.coloredUrl = '../../../../assets/data/colored-pricing-data.json';
		this.data = [];
		this.coloredData = [];
	}

  ngOnInit() {
    this.getPricingData(this.url, 'data');
    this.getPricingData(this.coloredUrl, 'coloredData');
  }

	getPricingData(url: string, data: string) {
		let observer = {
			next: x => this[data] = x,
			error: err => this.dataSv.handleError(err)
		};

		this.dataSv.getData(url).subscribe(observer);
	}
}
