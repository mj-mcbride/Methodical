import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Employee } from './employee.js';


@Injectable()
export class DataService {
  http;

  constructor(http: HttpClient) { this.http = http;}

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
    const options = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post("/api/new_employee", body, options).subscribe();
  }

  getEmployees(): void{ 
    // surname_name varchar(50) NOT NULL,
    // street_number varchar (5) not null,
    // street_name varchar (50) not null,
    // city varchar (20) not null,
    // NIN char(9) not null, 
    // bank_account varchar(37) not null,
    // salary int Not null default 13000,
    const body = {
      deptName: 'emp.forename'
    };
    const options = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post("/api/employees/dept", body, options).subscribe();
  }
}
