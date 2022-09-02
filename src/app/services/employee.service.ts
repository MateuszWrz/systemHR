import { EventEmitter, Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  // employeeSelected = new EventEmitter<Employee>();
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
  ];

  getEmployees() {
    return this.employees.slice();
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeeAdd.emit(this.employees.slice());
  }
}
