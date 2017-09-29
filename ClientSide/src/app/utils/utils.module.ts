import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { DateTimePickerComponent } from './calendar-date-time-picker.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from './calendar-header.component';
import {A2Edatetimepicker} from 'ng2-eonasdan-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    MaterialModule,
    A2Edatetimepicker,
    NgbModule.forRoot()
  ],
  providers : [{ provide: LOCALE_ID, useValue: 'pl-PL' } ],
  declarations: [CalendarHeaderComponent, DateTimePickerComponent],
  exports: [CalendarHeaderComponent, DateTimePickerComponent]
})
export class UtilsModule { }
