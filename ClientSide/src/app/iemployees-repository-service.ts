import {Employee} from "../../src/app/employee"
import { Observable } from "rxjs/Observable";
export interface IEmployeesRepositoryService {
  /**
   * GetAllEmployees
   */
   GetAllEmployees() : Observable<Employee[]>

   GetEmployeeById(id :number) : Observable<Employee>;

   GetEmployeeByName(name:string) : Observable<Employee[]>

   GetEmployeeByLastName(lastName:string) : Observable<Employee[]>

   GetAllEmployeeByEmail(email:string) : Observable<Employee>;

   AddPerson(employee : Employee) : void;

   DeletePerson(employee : Employee) : void;

   DeletePersonByEmail(email : string) : void;

   DeletePersonById(id : string) : void;

   DeletePersonAt(idx : number) : void;

   AddPerson(employee : Employee) : void;
}
