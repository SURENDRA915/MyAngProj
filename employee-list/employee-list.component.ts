import { Component } from '@angular/core'
import { EmployeeService } from './employee.service';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {
  myEmployees=[];
  constructor(private _employeeService:EmployeeService){
  this.myEmployees = _employeeService.getEmployees();
  console.log(this.myEmployees)
  
  }



}
