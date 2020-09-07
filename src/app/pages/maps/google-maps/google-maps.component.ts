import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class PageGoogleMapsComponent implements OnInit {
	lat: number;
	lng: number;
	
  constructor() { 
		this.lat = 51.678418;
		this.lng = 7.809007;
	}

  ngOnInit() {  }
}
