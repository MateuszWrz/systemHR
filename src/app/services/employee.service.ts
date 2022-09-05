import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

const api = '/api';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees: Employee[];
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${api}/employees`);
  }
  deleteEmployee(employee: Employee) {
    return this.http.delete(`${api}/employee/${employee.id}`);
  }
  addEmployee(employee: Employee) {
    return this.http.post<Employee>(`${api}/employee/`, employee);
  }
  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(`${api}/employee/${employee.id}`, employee);
  }
}
