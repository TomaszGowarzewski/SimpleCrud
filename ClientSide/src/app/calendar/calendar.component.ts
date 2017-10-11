import { DateTimePickerComponent } from '../utils/calendar-date-time-picker.component';
import { Subject } from 'rxjs/Rx';
import { take } from 'rxjs/operator/take';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
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

  currentColor : any;
 
  events: CalendarEvent[] = [
  ];

  dateChanged(event:any)
  {
    console.dir(event)
  }

  loguj(event:any)
  {
    console.log(event);
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


  addEvent(): void {
    this.events.push({
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
    });
    console.log(this.viewDate);
    this.refresh.next();
  }
  ngOnInit() {
  }
}
