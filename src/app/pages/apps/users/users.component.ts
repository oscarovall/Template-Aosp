import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IUser } from '../../../ui/interfaces/user';

@Component({
  selector: 'page-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class PageUsersComponent implements OnInit {
	data: Array<IUser>;
	private url: string;

  constructor(private sv: DataService) {
		this.data = [];
		this.url = '../../../assets/data/users-list.json';
	}

	getData(url: string) {
		let observer = {
			next: x => this.data = x,
			error: err => this.sv.handleError(err)
		};
		this.sv.getData(url).subscribe(observer);
	}

  ngOnInit() {
		this.getData(this.url);
  }
}
