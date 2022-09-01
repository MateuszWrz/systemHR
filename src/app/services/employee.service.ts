import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  employeeSelected = new EventEmitter<Employee>();

  private employees: Employee[] = [
    new Employee(
      'Janusz',
      'Kowalski',
      null,
      null,
      //   new Date(1973, 9, 10),
      //   new Date(2021, 7, 21),
      'Senior'
    ),
  ];

  constructor() {}
  getEmployees() {
    return this.employees.slice();
  }
}
