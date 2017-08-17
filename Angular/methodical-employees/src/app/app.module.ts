import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeesDeptComponent } from './view-employees-dept/view-employees-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddEmployeeComponent,
    ViewEmployeesDeptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
