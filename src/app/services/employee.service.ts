import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  employees: Employee[];
  employee: Employee;
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(`${environment.api}`);
  }
  getEmployee(id: Employee) {
    return this.http.get<Employee>(`${environment.api}` + '/' + id);
  }
  deleteEmployee(employee: Employee) {
    return this.http.delete(`${environment.api}/employee/${employee.id}`);
  }
  // addEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.post<Employee>(`${environment.api}`, employee);
  // }
  addEmployee(employee: Employee) {
    return this.http.post<Employee>(`${environment.api}`, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(
      `${environment.api}/employee/${employee.id}`,
      employee
    );
  }
}
