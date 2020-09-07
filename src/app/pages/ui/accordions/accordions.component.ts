import { Component, OnInit } from '@angular/core';
import { TCPanelComponent } from '../../../ui/components/accordion/panel';

@Component({
  selector: 'page-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class PageAccordionsComponent implements OnInit {
	panels: any;	
	
  constructor() { 
		this.panels = [
			{ title: 'Panel 1', desc: 'Sed tempor neque arcu, at lacinia odio feugiat at. Aenean ornare interdum augue ac sagittis. Curabitur eu tellus a leo eleifend commodo. Praesent tincidunt aliquam rhoncus. Curabitur quis lorem consequat, fermentum quam a, tristique massa. In vitae vehicula neque. Nullam ut faucibus erat. Mauris non pretium justo. Donec id arcu ipsum. Curabitur fermentum porta mi, a elementum velit fringilla sed.' },
			{ title: 'Panel 3', desc: 'Sed tempor neque arcu, at lacinia odio feugiat at. Aenean ornare interdum augue ac sagittis. Curabitur eu tellus a leo eleifend commodo. Praesent tincidunt aliquam rhoncus. Curabitur quis lorem consequat, fermentum quam a, tristique massa. In vitae vehicula neque. Nullam ut faucibus erat. Mauris non pretium justo. Donec id arcu ipsum. Curabitur fermentum porta mi, a elementum velit fringilla sed.' },
			{ title: 'Panel 2', desc: 'Sed tempor neque arcu, at lacinia odio feugiat at. Aenean ornare interdum augue ac sagittis. Curabitur eu tellus a leo eleifend commodo. Praesent tincidunt aliquam rhoncus. Curabitur quis lorem consequat, fermentum quam a, tristique massa. In vitae vehicula neque. Nullam ut faucibus erat. Mauris non pretium justo. Donec id arcu ipsum. Curabitur fermentum porta mi, a elementum velit fringilla sed.' },
		];
	}

	ngOnInit() { }
}
