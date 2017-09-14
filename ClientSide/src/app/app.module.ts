import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MdCardModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';
import { MdSelectModule } from '@angular/material'
import { MdListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import { CovalentMediaModule } from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentSearchModule } from '@covalent/core';
import { CovalentMenuModule } from '@covalent/core';
import { CovalentNotificationsModule, CovalentDataTableModule, TdDialogService, CovalentDialogsModule } from '@covalent/core';
import { TodolistComponent } from './todolist/todolist.component';
import { HomeComponent } from './home/home.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeesRepositoryService } from './employees-repository.service';
import { AuthenticationService } from './services/authentication.service';
import { Auth } from './guard/auth.guard';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
  { path: "todo", component: TodolistComponent },
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeesTableComponent
 },{ path: "logout", component: LogoutComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    HomeComponent,
    EmployeesTableComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    MdDialogModule,
    MdSelectModule,
    CovalentDataTableModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentSearchModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    CovalentHttpModule.forRoot(),
    CovalentDynamicFormsModule,
    CovalentDialogsModule
  ],
  providers: [EmployeesRepositoryService,AuthenticationService,TdDialogService,Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
