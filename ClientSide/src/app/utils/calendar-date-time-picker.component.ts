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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

export const DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimePickerComponent),
  multi: true
};

@Component({
  selector: 'mwl-demo-utils-date-time-picker',
  templateUrl: 'calendar-date-time-picker.component.html',
  styleUrls: ['calendar-date-time-picker.component.css'],
  providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR],
})
export class DateTimePickerComponent implements OnInit {
  @Input() placeholder: string;
  @Input() data: Date;

  value: any;
  label: string;
  en: any;
  dateStruct: NgbDateStruct;
  datePicker: any;
  timeStruct: NgbTimeStruct;
  curentDate: Date;


  constructor() {

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
