import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ITimelineBox } from '../../../ui/interfaces/timeline';

@Component({
  selector: 'page-v-timeline',
  templateUrl: './v-timeline.component.html',
  styleUrls: ['./v-timeline.component.scss']
})
export class PageVTimelineComponent implements OnInit {
  private url: string;
  data: ITimelineBox[];

  constructor(private dataSv: DataService) {
    this.url = '../../../../assets/data/timeline.json';
    this.data = [];
  }

  ngOnInit() {
    this.getData(this.url);
  }

  getData(url: string) {
    const OBSERVER = {
      next: x => this.data = x,
      error: err => this.dataSv.handleError(err)
    };

    this.dataSv.getData(url).subscribe(OBSERVER);
  }
}
