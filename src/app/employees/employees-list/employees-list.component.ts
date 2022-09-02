import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeListService } from 'src/app/services/employee-list.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers: [EmployeeListService],
})
export class EmployeesListComponent implements OnInit {
  employee: Employee[];
  constructor(private employeeService: EmployeeListService) {}

  ngOnInit() {
    this.employee = this.employeeService.getEmployees();
    console.log(this.employee);
  }
}
