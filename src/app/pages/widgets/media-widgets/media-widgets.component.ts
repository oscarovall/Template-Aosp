import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { IUser } from '../../../ui/interfaces/user';

@Component({
  selector: 'page-media-widgets',
  templateUrl: './media-widgets.component.html',
  styleUrls: ['./media-widgets.component.scss']
})
export class PageMediaWidgetsComponent implements OnInit {
	users: Array<IUser>
	data: Array<IUser>
	private url: string;

	constructor( private sv: DataService ) {
		this.users = [];
		this.data = [];
		this.url = '../../../../assets/data/users-list.json'
	}

	getData(url: string) {
		let observer = {
			next: x => this.data = x.slice(0,2),
			error: err => this.sv.handleError(err)
		};
		this.sv.getData(url).subscribe(observer);
	}

  ngOnInit() {
		this.getData(this.url);
  }
}
