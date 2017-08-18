import { Component, OnInit } from '@angular/core';
import { SalesEmployee } from '../sales-employee';

import { DataService } from '../data.service';

@Component({
  selector: 'methodical-add-sales-employee',
  templateUrl: './add-sales-employee.component.html',
  styleUrls: ['./add-sales-employee.component.css']
})
export class AddSalesEmployeeComponent implements OnInit {

  employee: SalesEmployee;
  data: DataService;
  showSuccess: boolean;

  constructor(dataService: DataService) { 
    this.employee = new SalesEmployee;
    this.data = dataService;
    this.showSuccess = false;

  }

  ngOnInit() {
  }

  onSubmitEmployee(employee: SalesEmployee){
    console.log(employee.street_name);
    this.data.addSalesEmployee(employee);
    this.showSuccess = true;
  }
}
