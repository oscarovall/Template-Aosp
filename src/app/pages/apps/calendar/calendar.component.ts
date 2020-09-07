import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
	TemplateRef
} from '@angular/core';
import { DatePipe } from '@angular/common';

import {
	startOfDay,
	endOfDay,
	subDays,
	addDays,
	endOfMonth,
	isSameDay,
	isSameMonth,
	addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
	CalendarEvent,
	CalendarEventAction,
	CalendarEventTimesChangedEvent
} from 'angular-calendar';

const COLORS: any = {
  red: {
    primary: '#e24d4d',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#64b5f6',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#ffb74d',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'page-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.scss'],
  templateUrl: './calendar.component.html'
})
export class PageCalendarComponent {
	@ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

	view: string;
	viewDate: Date;

	selectedEvent: CalendarEvent;
	eventActive: boolean;
	newEvent: boolean;

	selectedStartDate: string;
	selectedEndDate: string;
	selectedStartTime: string;
	selectedEndTime: string;
	selectedTitle: string;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[];

  refresh: Subject<any>;
  events: CalendarEvent[];
  activeDayIsOpen: boolean;

  constructor(public datepipe: DatePipe) {
		this.actions = [
			{
				label: '<i class="icofont-ui-delete"></i>',
				onClick: ({ event }: { event: CalendarEvent }): void => {
					this.events = this.events.filter(iEvent => iEvent !== event);
				}
			}
		];
		this.activeDayIsOpen = true;
		this.view = 'month';
		this.viewDate = new Date();
		this.refresh = new Subject();
		this.events = [
			{
				start: subDays(startOfDay(new Date()), 1),
				end: addDays(new Date(), 1),
				title: 'A 3 day event',
				color: COLORS.red,
				actions: this.actions
			},
			{
				start: startOfDay(new Date()),
				title: 'An event with no end date',
				color: COLORS.yellow,
				actions: this.actions
			},
			{
				start: subDays(endOfMonth(new Date()), 3),
				end: addDays(endOfMonth(new Date()), 3),
				title: 'A long event that spans 2 months',
				color: COLORS.blue
			}
		];
		this.selectedEvent = this.events[0];
		this.eventActive = false;
		this.newEvent = false;

		this.selectedEndDate = '';
		this.selectedStartDate = '';
		this.selectedTitle = '';
		this.selectedStartTime = '';
		this.selectedEndTime = '';
	}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent(event);
    this.refresh.next();
  }

  handleEvent(event: CalendarEvent): void {
		this.selectedEvent = event;
		this.selectedTitle = event.title;
		this.selectedStartDate = this.datepipe.transform(event.start, 'yyyy/MM/dd');
		this.selectedEndDate = this.datepipe.transform(event.end, 'yyyy/MM/dd');
		this.selectedStartTime = this.datepipe.transform(event.start, 'hh:hh');
		this.selectedEndTime = this.datepipe.transform(event.end, 'hh:mm');
		this.eventActive = true;
	}

	saveEvent(): void {
		this.events.forEach((event: CalendarEvent) => {
			if (event === this.selectedEvent) {
				this.saveData(event);
			}
		});
		this.refresh.next();
		this.eventActive = false;
	}

	saveData(event: CalendarEvent): void {
		event.title = this.selectedTitle;
		event.start = new Date(this.selectedStartDate + ' ' + this.selectedStartTime);
		event.end = new Date(this.selectedEndDate + ' ' + this.selectedEndTime);
	}

	deleteEvent(): void {
		this.events.forEach((event: CalendarEvent) => {
			if (event === this.selectedEvent) {
				this.events = this.events.filter(iEvent => iEvent !== event);
			}
		});
		this.eventActive = false;
	}

	closeEventAction(): void {
		this.eventActive = false;
		this.selectedEvent = {
			start: new Date(),
      title: '',
		};
		this.selectedEndDate = '';
		this.selectedStartDate = '';
		this.selectedTitle = '';
	}

  addEvent(): void {
    this.events.push({
      title: this.selectedTitle,
      start: new Date(this.selectedStartDate + ' ' + this.selectedStartTime),
      end: new Date(this.selectedEndDate + ' ' + this.selectedEndTime),
      color: COLORS.red,
    });
		this.refresh.next();
		this.newEvent = false;
  }
}
