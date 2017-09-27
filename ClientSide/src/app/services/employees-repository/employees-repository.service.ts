import { Injectable } from '@angular/core';

import {  Observable  } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IEmployeesRepositoryService } from './iemployees-repository-service';
import { Employee } from '../../employee';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmployeesRepositoryService implements IEmployeesRepositoryService {

  constructor(private http: HttpClient) { }

  DeletePersonAt(idx: number): void {
    console.log('halo halo', idx);
    this.http.post('http://localhost:5000/api/People/DeletePersonAt',idx).subscribe(res => {console.log(res),err => {console.log(err)}});
  }
  AddPerson(employee: Employee): void {
    this.http.post('http://localhost:5000/api/People/AddPerson', employee).subscribe(res => {console.log(res),err => {console.log(err)}});
  }
  DeletePerson(employee: Employee): void {
    console.log('blalasd');
    this.http.post('http://localhost:5000/api/People/DeletePerson', employee).subscribe(res =>
    { console.log(res),err => {console.log(err)}});
  }
  DeletePersonByEmail(email: string): void {
    this.http.post('http://localhost:5000/api/People/DeletePersonByEmail',email).subscribe(res => {console.log(res),err => {console.log(err)}});
  }
  DeletePersonById(id: string): void {
    this.http.post("http://localhost:5000/api/People/DeletePersonById",id).subscribe(res => {console.log(res),err => {console.log(err)}});
  }
  GetAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:5000/api/People/GetAllPeople");
  }
  GetEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>("http://localhost:5000/api/People/GetPersonById/" + id);
  }
  GetEmployeeByName(name: string): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:5000/api/People/GetAllPeopleByName/" + name);
  }
  GetEmployeeByLastName(lastName: string): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:5000/api/People/GetPeopleByLastName/" + lastName);
  }
  GetAllEmployeeByEmail(email: string): Observable<Employee> {
    return this.http.get<Employee>("http://localhost:5000/api/People/GetPersonByEmail/" + email);
  }

}
