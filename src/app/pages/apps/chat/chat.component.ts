import { Component, OnInit } from '@angular/core';

import { IChatMessage, IChatUser } from '../../../ui/interfaces/chat';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class PageChatComponent implements OnInit {
  private url: string;
  data: Array<IChatMessage>;
  activeUser: IChatUser;

  constructor(private dataSv: DataService) {
    this.url = '../../../assets/data/chat-messages.json';
    this.data = [];
    this.activeUser = {
      name: 'Dennis',
      lastSeen: 'online',
      avatar: ''
    }
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
