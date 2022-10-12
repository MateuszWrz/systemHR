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
  employeeToEdit?: Employee;
  emp: any;
  modalTitle: string;
  ActivateEditComponent = false;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.employeeService.getEmployees().subscribe({
      next: (employee) => {
        this.employees = employee;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onSelect(employee: any) {
    this.employeeService.getEmployee(employee.id).subscribe({
      next: (res) => {
        this.employee = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteEmployee(id) {
    const index = this.employees.indexOf(id);
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res: Employee) => {
        this.employees.splice(index, 1);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editEmployee(item) {
    this.emp = item;
    this.modalTitle = 'Edytuj dane pracownika';
    this.ActivateEditComponent = true;
  }
}
