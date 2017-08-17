import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

import { DataService } from '../data.service';


@Component({
  selector: 'methodical-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee;
  data: DataService;

  constructor(dataService: DataService) { 
    this.employee = new Employee;
    this.data = dataService;

  }

  ngOnInit() {
  }

  onSubmitEmployee(employee: Employee){
    this.data.addEmployee(employee);
  }

}
