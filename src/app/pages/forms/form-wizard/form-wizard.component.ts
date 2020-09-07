import { Component, OnInit } from '@angular/core';
import { IOption } from '../../../ui/interfaces/option';

@Component({
  selector: 'page-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class PageFormWizardComponent implements OnInit {
	options: IOption[];
	
  constructor() {
		this.options = [
			{
				label: 'Front End Developer',
				value: ''
			},
			{
				label: 'Back End Developer',
				value: ''
			},
			{
				label: 'Full Stack Developer',
				value: ''
			},
			{
				label: 'Designer',
				value: ''
			},
			{
				label: 'Manager',
				value: ''
			}
		]
	}

  ngOnInit() {
  }

	setProgress(page: number): number {
		if (!page || page < 0) {
			return 0;
		} else {
			return (page  / 3) * 100;
		}
	}

	nextPage(page: number) {
		page++;
		console.log(page);
	}
}
