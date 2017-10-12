import { DateTimePickerComponent } from '../utils/calendar-date-time-picker.component';
import { Subject } from 'rxjs/Rx';
import { take } from 'rxjs/operator/take';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { setHours, setMinutes, startOfDay, endOfDay } from 'date-fns';
import * as moment from 'moment';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent implements OnInit {
  view = 'day';
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  @Input() StartsAtError : boolean;
  @Input() EndsAtError : boolean;
  currentColor : any;
 currentDayEvents : CalendarEvent[] = [];
  events: CalendarEvent[] = [
  ];

  RefreshEvents()
  {
    this.currentDayEvents = this.events.filter(x=> new Date(x.start).setHours(0,0,0,0) === this.viewDate.setHours(0,0,0,0));
  }
  dateChanged(event : boolean)
  {
    this.RefreshEvents();
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    if (!event.status) {
     // newEnd = moment(newEnd).subtract(1, 'h').toDate();
     // newStart = moment(newStart).add(7, 'h').toDate();
      event.status = true;
    }
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  refreshTable()
  {
    this.RefreshEvents();
  }
  SaveEvent(event : CalendarEvent)
  {
    if (new Date(event.start).setHours(0,0,0,0) !== new Date(this.viewDate).setHours(0,0,0,0))
    {
      console.log("jest nie halo ");
    }
    if (new Date(event.end).setHours(0,0,0,0) !== new Date(this.viewDate).setHours(0,0,0,0))
    {
      console.log("jest nie halo ");
    }
  }

  addEvent(): void {

    var event = {
      title: 'New event',
       start: moment(this.viewDate).hour(7).minute(0).toDate() ,
       end: moment(this.viewDate).hour(22).minute(0).toDate() ,
      color: colors.red,
      draggable: false,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      status: false
    }
    this.events.push(event);

    this.currentDayEvents.push(event);

    this.refresh.next();
  }
  ngOnInit() {
  }
}
