import { strictEqual } from 'assert';
import { ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
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
  templateUrl:'calendar-date-time-picker.component.html',
  styleUrls : ['calendar-date-time-picker.component.css'],
  providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
})
export class DateTimePickerComponent implements ControlValueAccessor {
  a2eOptions: { format: string; };
  @Input() placeholder: string;
  @Input() data: Date;

  date: any;
  label: string;

  dateStruct: NgbDateStruct;
  datePicker: any;
  timeStruct: NgbTimeStruct;
  curentDate: Date;

  

  updateMyDate(newDate:Date) {
    console.log(this.curentDate.getHours());
    const dat = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(),
      this.curentDate.getHours(), this.curentDate.getMinutes(), this.curentDate.getSeconds(), this.curentDate.getMilliseconds());
      this.curentDate = dat;
  }

  dateChange(date) {
    this.date = date;
  }
  
OnIncrementHoursClick()
{
  this.curentDate = moment(this.curentDate).add(1, 'h').toDate();
}
OnDecrementHoursClick()
{
  this.curentDate = moment(this.curentDate).subtract(1, 'h').toDate();
}
OnIncrementMinutesClick()
{
  this.curentDate = moment(this.curentDate).add(1, 'm').toDate();
}
OnDecrementMinutesClick()
{
  this.curentDate = moment(this.curentDate).subtract(1, 'm').toDate();
}
  private onChangeCallback: (date: Date) => void = () => {};

  constructor(private cdr: ChangeDetectorRef) {this.curentDate = new Date(2017, 10, 3 , 12 , 23 , 12 , 23);
    this.date = moment();
    this.a2eOptions = {format: 'YYYY/MM/DD HH:mm'}; }



  writeValue(date: Date): void {
    this.date = date;
    this.dateStruct = {
      day: getDate(date),
      month: getMonth(date) + 1,
      year: getYear(date)
    };
    this.timeStruct = {
      second: getSeconds(date),
      minute: getMinutes(date),
      hour: getHours(date)
    };
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {}

  updateDate(): void {
    const newDate: Date = setYear(
      setMonth(
        setDate(this.date, this.dateStruct.day),
        this.dateStruct.month - 1
      ),
      this.dateStruct.year
    );
    this.onChangeCallback(newDate);
  }

  updateTime(): void {
    const newDate: Date = setHours(
      setMinutes(
        setSeconds(this.date, this.timeStruct.second),
        this.timeStruct.minute
      ),
      this.timeStruct.hour
    );
    this.onChangeCallback(newDate);
  }
}
