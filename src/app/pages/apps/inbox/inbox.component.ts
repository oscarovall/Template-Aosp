import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { IMessage } from '../../../ui/interfaces/message';

@Component({
  selector: 'page-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class PageInboxComponent implements OnInit {
	url: string;
	data: Array<IMessage>;

	constructor(private listService: DataService) {
		this.url = '../../../assets/data/inbox-message.json';
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
