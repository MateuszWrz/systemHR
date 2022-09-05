import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeListService } from './employee-list.service';
import { Employee } from '../models/employee.model';
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees: Employee[];
  constructor(
    private http: HttpClient,
    private employeeListService: EmployeeListService
  ) {}

  getEmployees() {
    return this.employees.slice();
  }
}
