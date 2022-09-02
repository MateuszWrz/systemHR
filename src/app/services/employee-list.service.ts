import { EventEmitter, Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeListService {
  // employeeSelected = new EventEmitter<Employee>();
  employeeChanged = new EventEmitter<Employee[]>();
  employeeAdd = new EventEmitter<Employee[]>();
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
    new Employee(
      'Rafał',
      'Sokół',
      null,
      null,
      // new Date(1973, 9, 10),
      // new Date(2021, 7, 21),
      'Graphic artist'
    ),
    new Employee(
      'Ryszard',
      'Mańko',
      null,
      null,
      // new Date(1973, 9, 10),
      // new Date(2021, 7, 21),
      'Science analyst'
    ),
  ];

  getEmployees() {
    return this.employees.slice();
  }

  addEmployeeToEmployeeList(employee: Employee[]) {
    this.employees.push(...employee);
    this.employeeChanged.emit(this.employees.slice());
  }
}
