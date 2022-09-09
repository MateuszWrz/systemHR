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
  selectedEmployee: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.employeeService.getEmployees().subscribe((employee) => {
      this.employees = employee;
      console.log(employee);
    });
  }
  onSelect(employee: any) {
    this.selectedEmployee = employee;
    this.employeeService.getEmployee(employee.id).subscribe((res) => {
      this.employee = res;
      console.log(res);
    });
  }
  deleteEmployee(employee: Employee) {
    this.selectedEmployee = employee;
    this.employeeService.deleteEmployee(employee).subscribe((res) => {
      this.employees = this.employees.filter((e) => e !== employee);
      if (this.selectedEmployee === employee) {
        this.selectedEmployee = null;
      }
    });
  }
}
