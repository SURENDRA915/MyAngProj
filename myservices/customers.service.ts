import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  
    getEmployees(){
      return [
        {"empId":101, "empName":"Suren", "salary":50000},
        {"empId":102, "empName":"Ramesh", "salary":60000},
        {"empId":103, "empName":"Mahesh", "salary":42000},
      
      ]
   }

  }