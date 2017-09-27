import { CovalentModule } from './covalent/covalent.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { TodolistComponent } from './todolist/todolist.component';
import { HomeComponent } from './home/home.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { Auth } from './guard/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { EmployeesRepositoryService } from './services/employees-repository/employees-repository.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { NaviComponent } from './navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';



const appRoutes: Routes = [
  { path: 'todo', component: TodolistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesTableComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'calendar', component: CalendarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    HomeComponent,
    EmployeesTableComponent,
    LogoutComponent,
    ProfileComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    NaviComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MaterialModule,
    CovalentModule,
    FormsModule,
    HttpModule,
    CalendarModule.forRoot(),
    NgbModule,
  ],
  exports : [],
  providers: [EmployeesRepositoryService,AuthenticationService, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
