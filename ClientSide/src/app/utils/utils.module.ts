import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../material/material.module';
import { DateTimePickerComponent } from './calendar-date-time-picker.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarHeaderComponent } from './calendar-header.component';
import { Calendar,AccordionModule,AutoCompleteModule,BlockUIModule,BreadcrumbModule,ButtonModule,CarouselModule,ChartModule,CheckboxModule,ChipsModule,CodeHighlighterModule,ConfirmDialogModule,ContextMenuModule,DataGridModule,DataListModule,DataScrollerModule,DataTableModule,DialogModule,DragDropModule,DropdownModule,EditorModule,FieldsetModule,FileUploadModule,GalleriaModule,GMapModule,GrowlModule,InplaceModule,InputMaskModule,InputSwitchModule,InputTextareaModule,InputTextModule,LightboxModule,ListboxModule,MegaMenuModule,MenubarModule,MenuModule,MessagesModule,MultiSelectModule,OrderListModule,OverlayPanelModule,PaginatorModule,PanelMenuModule,PanelModule,PasswordModule,PickListModule,ProgressBarModule,RadioButtonModule,RatingModule,ScheduleModule,SelectButtonModule,SharedModule,SlideMenuModule,SliderModule,SpinnerModule,SplitButtonModule,StepsModule,TabMenuModule,TabViewModule,TerminalModule,TieredMenuModule,ToggleButtonModule,ToolbarModule,TooltipModule,TreeModule,TreeTableModule,TriStateCheckboxModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    MaterialModule,
    NgbModule.forRoot(),
    AccordionModule,AutoCompleteModule,BlockUIModule,BreadcrumbModule,ButtonModule,CarouselModule,ChartModule,CheckboxModule,ChipsModule,CodeHighlighterModule,ConfirmDialogModule,ContextMenuModule,DataGridModule,DataListModule,DataScrollerModule,DataTableModule,DialogModule,DragDropModule,DropdownModule,EditorModule,FieldsetModule,FileUploadModule,GalleriaModule,GMapModule,GrowlModule,InplaceModule,InputMaskModule,InputSwitchModule,InputTextareaModule,InputTextModule,LightboxModule,ListboxModule,MegaMenuModule,MenubarModule,MenuModule,MessagesModule,MultiSelectModule,OrderListModule,OverlayPanelModule,PaginatorModule,PanelMenuModule,PanelModule,PasswordModule,PickListModule,ProgressBarModule,RadioButtonModule,RatingModule,ScheduleModule,SelectButtonModule,SharedModule,SlideMenuModule,SliderModule,SpinnerModule,SplitButtonModule,StepsModule,TabMenuModule,TabViewModule,TerminalModule,TieredMenuModule,ToggleButtonModule,ToolbarModule,TooltipModule,TreeModule,TreeTableModule,TriStateCheckboxModule
  ],
  providers : [{ provide: LOCALE_ID, useValue: 'pl-PL' } ],
  declarations: [CalendarHeaderComponent, DateTimePickerComponent,Calendar],
  exports: [CalendarHeaderComponent, DateTimePickerComponent]
})
export class UtilsModule { }
