import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mwl-demo-utils-calendar-header',
  templateUrl : 'calendar-header.component.html'
})
export class CalendarHeaderComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale = 'pl';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  @Output() dateChanged : EventEmitter<boolean> = new EventEmitter();

 ViewDateChanged(viewDate :any)
 {
   this.viewDateChange.next(viewDate);
   this.dateChanged.emit(true);
 }
}
