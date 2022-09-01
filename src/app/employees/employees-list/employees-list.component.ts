import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers: [EmployeeService],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[];
  constructor(employeeService: EmployeeService) {
    this.employees = employeeService.getEmployees();
    console.log(employeeService);
  }

  ngOnInit() {}
}
