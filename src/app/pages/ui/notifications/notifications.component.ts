import { Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { INotification } from '../../../interfaces/notification';
import { IOption } from '../../../ui/interfaces/option';
import { INotificationState } from '../../../interfaces/notification.state';
import * as NotificationActions from '../../../store/actions/notification.actions';

@Component({
  selector: 'page-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class PageNotificationsComponent implements OnInit {
	views: IOption[];
	animations: IOption[];
	positions: IOption[];
	content: FormControl;
	position: FormControl;
	animation: FormControl;
	title: FormControl;
	radioGroup: FormGroup;
	icon: FormControl;
	hideTimeout: FormControl;
	view: FormControl;
	
	
	constructor(private store: Store<INotificationState>, private fb: FormBuilder) { 
		this.positions = [
			{
				label: 'Top Right',
				value: 'topRight'
			},
			{
				label: 'Top Left',
				value: 'topLeft'
			},
			{
				label: 'Bottom Right',
				value: 'bottomRight'
			},
			{
				label: 'Bottom Left',
				value: 'bottomLeft'
			}
		]
		this.views = [
			{
				label: 'Default view',
				value: 'default'				
			},
			{
				label: 'Accent view',
				value: 'accent'				
			},
			{
				label: 'Info view',
				value: 'info'				
			},
			{
				label: 'Success view',
				value: 'success'				
			},
			{
				label: 'Warning view',
				value: 'warnign'				
			},
			{
				label: 'Error view',
				value: 'error'				
			},
		];

		this.animations = [
			{
				value: 'fromTop',
				label: 'From Top'
			},
			{
				value: 'fromBottom',
				label: 'From Bottom'
			},
			{
				value: 'fromRight',
				label: 'From Right'
			},
			{
				value: 'fromLeft',
				label: 'From Left'
			},
			{
				value: 'fade',
				label: 'Fade'
			},
		]
	}
	public createRadioGroup() {
		this.radioGroup = this.fb.group({
			progress: new FormControl(true),
			autohide: new FormControl(true)
		});
	}

  ngOnInit() {
		this.createRadioGroup();
    this.content = new FormControl('');
    this.position = new FormControl(this.positions[0].value);
    this.animation = new FormControl(this.animations[0].value);
    this.title = new FormControl('Title');
    this.icon = new FormControl('icofont-check');
    this.hideTimeout = new FormControl(5000);
    this.view = new FormControl(this.views[0].value);
	}
	
	addNotification() {
		this.store.dispatch(new NotificationActions.AddOne({
			content: this.content.value,
			position: this.position.value,
			title: this.title.value,
			animation: this.animation.value,
			hideTimeout: this.hideTimeout.value,
			autohide: this.radioGroup.get('autohide').value,
			progress: this.radioGroup.get('progress').value,
			view: this.view.value,
			icon: this.icon.value
		}));
	}	
}
