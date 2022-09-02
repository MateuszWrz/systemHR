import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeListService } from './employee-list.service';
import { Employee } from '../models/employee.model';
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employee: Employee[];
  constructor(
    private http: HttpClient,
    private employeeListService: EmployeeListService
  ) {}

  employeesAdd() {
    const employees = this.employeeListService.getEmployees();
    return this.http
      .put(
        'https://systemhr-c155e-default-rtdb.europe-west1.firebasedatabase.app/employees.json',
        employees
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
