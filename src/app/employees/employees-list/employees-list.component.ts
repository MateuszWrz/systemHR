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
  employee: Employee;
  addingEmployee = false;
  selectedEmployee: string;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.employeeService.getEmployees().subscribe({
      next: (employee) => {
        this.employees = employee;
        console.log(employee);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onSelect(employee: any) {
    this.selectedEmployee = employee;
    this.employeeService.getEmployee(employee.id).subscribe({
      next: (res) => {
        this.employee = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res: Employee[]) => {
        this.employees.splice(
          this.employees.findIndex((p) => (p.id = id)),
          1
        );
        console.log(res);
        console.log('Usunięto pracownika o numerze id ' + id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
