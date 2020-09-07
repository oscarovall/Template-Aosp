import { Component, OnInit } from '@angular/core';
import { ITimelineBox } from '../../../ui/interfaces/timeline';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class PageTimelineComponent implements OnInit {
  private url: string;
  data: ITimelineBox[];

  constructor(private dataSv: DataService) {
    this.url = '../../../../assets/data/timeline-between.json';
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
