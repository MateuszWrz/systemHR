import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

const api = 'https://localhost:7009/api/Employees';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees: Employee[];
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${api}`);
  }
  getEmployee(id: Employee) {
    return this.http.get<Employee>(`${api}` + '/' + id);
  }
  deleteEmployee(employee: Employee) {
    return this.http.delete(`${api}/employee/${employee.id}`);
  }
  addEmployee(employee: Employee) {
    return this.http.post<Employee>(`${api}`, employee);
  }
  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(`${api}/employee/${employee.id}`, employee);
  }
}
