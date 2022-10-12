import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(environment.api + '/Employees');
  }
  getEmployee(id) {
    return this.http.get<Employee>(environment.api + '/Employees' + '/' + id);
  }
  deleteEmployee(id) {
    return this.http.delete<Employee>(
      environment.api + '/Employees' + '/' + id
    );
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(environment.api + '/Employees', employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(environment.api + '/Employees/', employee);
  }
}
