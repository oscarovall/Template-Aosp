import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class PageFaqComponent implements OnInit {
  panels: Array<any>;

  constructor() {
		this.panels = [
			{
			  title: 'Lorem ipsum dolor sit amet?',
        desc: 'Aenean eget leo vel lorem tincidunt tempor sit amet non ex. Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est. Phasellus ut odio in dolor eleifend tincidunt eget id tellus.'
      },
			{
			  title: 'Nulla ut tortor et arcu porttitor sollicitudin a a odio?',
        desc: 'Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id. Etiam eu velit felis. Duis at vehicula ligula, et suscipit nunc.'
      },
			{
			  title: 'Phasellus imperdiet eros vitae mi malesuada consectetur?',
        desc: 'Aenean eget leo vel lorem tincidunt tempor sit amet non ex. Aenean porta, velit ut efficitur fringilla, enim est suscipit augue, in porta ex nisi quis est. Phasellus ut odio in dolor eleifend tincidunt eget id tellus.'
      },
			{
			  title: 'Proin facilisis magna congue mattis mattis?',
        desc: 'Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id. Etiam eu velit felis. Duis at vehicula ligula, et suscipit nunc.'
			}
		];
	}

  ngOnInit() { }
}
