import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';


@Component({
  selector: 'methodical-view-employees-dept',
  templateUrl: './view-employees-dept.component.html',
  styleUrls: ['./view-employees-dept.component.css']
})
export class ViewEmployeesDeptComponent implements OnInit {
  data: DataService;
  employees: Employee[];

  constructor(dataService: DataService) { 
    this.data = dataService;
    this.employees = this.data.getEmployees();
    console.log(this.employees);
    
  }

  ngOnInit() {
    
  }

}
