import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Employee } from './employee.js';

import { SalesEmployee } from './sales-employee';


@Injectable()
export class DataService {
  http;

  //this.employees = this.http.get<Employee[]>('/api/employees/dept');

  constructor(http: HttpClient) { this.http = http;}

  //employees = this.http.get('/api/employees/dept');

  addEmployee(emp: Employee): void{ 
    // surname_name varchar(50) NOT NULL,
    // street_number varchar (5) not null,
    // street_name varchar (50) not null,
    // city varchar (20) not null,
    // NIN char(9) not null, 
    // bank_account varchar(37) not null,
    // salary int Not null default 13000,
    const body = {
      forename: emp.forename,
      surname: emp.surname,
      street_number: emp.street_number,
      street_name: emp.street_name,
      city: emp.city,
      NIN: emp.NIN,
      bank_account: emp.bank_account,
      salary: emp.salary
    };
    console.log(body.forename);
    const options = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    // return this.http.post("/api/new_employee", body, options).subscribe();
    return this.http.post("/api/new_employee/", body, options).subscribe();
  }

  addSalesEmployee(emp: SalesEmployee): void{ 
    const body = {
      forename: emp.forename,
      surname: emp.surname,
      street_number: emp.street_number,
      street_name: emp.street_name,
      city: emp.city,
      NIN: emp.NIN,
      bank_account: emp.bank_account,
      salary: emp.salary,
      commission_rate: emp.commission
    };
    console.log(body.forename);
    const options = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    // return this.http.post("/api/new_employee", body, options).subscribe();
    return this.http.post("/api/new_sales_employee/", body, options).subscribe();
  }


  getEmployeesByDepartment(id: number): Employee[]{ 

    console.log("Called method" + id);
    const body = {
      deptID: id
    }

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  console.log(body.deptID);
    return this.http.post('/api/employees/dept', body, options);
  }
}
