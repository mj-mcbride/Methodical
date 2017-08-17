import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'methodical-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
