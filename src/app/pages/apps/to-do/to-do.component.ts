import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ITodoItem } from '../../../ui/interfaces/todoItem';

@Component({
  selector: 'page-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class PageToDoComponent implements OnInit {
	private url: string;
	data: Array<ITodoItem>;

  constructor(private sv: DataService) {
		this.data = [];
		this.url = '../../../../assets/data/todo-items.json';
	}

	getItems(url: string) {
		let items: Array<ITodoItem> = [];
		const OBSERVER = {
			next: x => items = x,
			error: err => this.sv.handleError(err),
			complete: () => this.data = items
		};
		this.sv.getData(url).subscribe(OBSERVER)
	}

  ngOnInit() {
		this.getItems(this.url);
  }
}
