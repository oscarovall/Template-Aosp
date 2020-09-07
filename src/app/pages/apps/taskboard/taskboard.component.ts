import { Component, OnInit } from '@angular/core';

import { ITask } from '../../../ui/interfaces/task';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class PageTaskboardComponent implements OnInit {
	data: Array<ITask>;
	private url: string;

	constructor(private listService: DataService) {
		this.url = '../../../assets/data/task.json';
		this.data = [];
	}

	getData(url: string) {
		let observer = {
			next: x => this.data = x,
			error: err => this.listService.handleError(err)
		};
		this.listService.getData(url).subscribe(observer);
	}

  ngOnInit() {
		this.getData(this.url);
  }
}
