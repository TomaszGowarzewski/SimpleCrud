import { MOMENT } from 'angular-calendar/dist/esm/src/index.umd';
import { Subject } from 'rxjs/Rx';
import { take } from 'rxjs/operator/take';
import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./calendar.component.css'],
})

export class CalendarComponent implements OnInit {
  view = 'day';
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
  ];

  eventTimesChanged({event, newStart , newEnd}: CalendarEventTimesChangedEvent): void {
    console.dir(newStart);
    console.dir(newEnd);
    if (!event.status)
    {
      newEnd = moment(newEnd).subtract(1,'h').toDate();
      newStart = moment(newStart).add(7,'h').toDate();
      event.status = true;
    }
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: false,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      status : false
    });
    this.refresh.next();
  }
  ngOnInit() {
  }
}
