import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class PageIconsComponent implements OnInit {
  icons: string[];
  private url: string;

  constructor(private dataSv: DataService) {
    this.icons = [];
    this.url = '../../../assets/data/icons.json';
  }

  getData(url: string) {
    let observer = {
      next: x => this.icons = x,
      error: err => this.dataSv.handleError(err)
    };
    this.dataSv.getData(url).subscribe(observer);
  }

  ngOnInit() {
    this.getData(this.url);
  }
}
