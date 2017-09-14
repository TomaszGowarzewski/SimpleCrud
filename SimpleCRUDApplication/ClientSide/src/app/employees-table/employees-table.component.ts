import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { EmployeesRepositoryService } from '../employees-repository.service'
import { ITdDataTableColumn } from '@covalent/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs/Observable';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Auth } from '../guard/auth.guard';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {


  data: Employee[];
  selectable = true;
  selectedRows: any[] = [];
  constructor(private http: HttpClient,private auth : Auth, private employeesRepository: EmployeesRepositoryService, private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef) {
  }

  isLogged():boolean {
    if (localStorage.getItem('CurrentUser'))
    {
      return true;
    }
    return false;
  }

  deleteSelectedRecords() {
    this._dialogService.openConfirm({
      message: "Are you sure to delete these employees from list ? ",
      disableClose: true,
      viewContainerRef: this._viewContainerRef,
      title: "Confirm",
      cancelButton: "Disagree",
      acceptButton: "Agree"
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        console.dir(this.data);
        this.selectedRows.forEach(x => {

          var index = this.data.indexOf(x);
          if (index > -1) {
            this.data.splice(index, 1);
            var employ = new Employee(x["name"], x["lastName"], x["id"], x["email"], x["phone"]);
            this.employeesRepository.DeletePerson(employ);
            this.employeesRepository.GetAllEmployees().subscribe(data => this.data = data, error => console.log(error), () => { console.log("nie ma errora") });
          }
        })
      }
      else {
        console.log("Nie usunieto");
      }
    })

  }

  columns: ITdDataTableColumn[] = [{
    name: "id", label: "id", tooltip: "id"
  }, {
    name: "name", label: "name", tooltip: "name"
  }, {
    name: "lastName", label: "lastName", tooltip: "lastName"
  }, {
    name: "email", label: "email", tooltip: "email"
  }, {
    name: "phone", label: "phone", tooltip: "phone"
  }]

  ngOnInit() {
    this.employeesRepository.GetAllEmployees().subscribe(data => this.data = data, error => console.log(error), () => { console.log("nie ma errora") });
  }
}




