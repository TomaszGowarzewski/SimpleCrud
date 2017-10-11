import { strictEqual } from 'assert';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { CalendarModule } from 'primeng/primeng';
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {
  getSeconds,
  getMinutes,
  getHours,
  getDate,
  getMonth,
  getYear,
  setSeconds,
  setMinutes,
  setHours,
  setDate,
  setMonth,
  setYear
} from 'date-fns';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'mwl-demo-utils-date-time-picker',
  templateUrl: 'calendar-date-time-picker.component.html',
  styleUrls: ['calendar-date-time-picker.component.css'],
})
export class DateTimePickerComponent implements OnInit {
  @Input() placeholder: string;
  @Output() dateChanged = new EventEmitter<Date>();
  @Input('val') val: string ;

  value: any;
  label: string;
  en: any;
  dateStruct: NgbDateStruct;
  datePicker: any;
  timeStruct: NgbTimeStruct;
  date: Date;

  clickniete(){
    console.log("lasdlad");
  }
  constructor() {

  }
  onSelect(event: any) {
    this.dateChanged.emit(event);
}
    public ngOnInit(): void {
      this.en = {
        firstDayOfWeek: 0,
        dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        dayNamesShort: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
        dayNamesMin: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
        monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gr"],
        today: 'Dzis',
        clear: 'Czyść'
      };
    }
}
