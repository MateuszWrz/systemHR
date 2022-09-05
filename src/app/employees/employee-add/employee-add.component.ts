import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService],
})
export class EmployeeAddComponent implements OnInit {
  @Input() employees: Employee[];
  addingEmployee = false;
  selectedEmployee: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  cancel() {
    this.addingEmployee = false;
    this.selectedEmployee = null;
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe((res) => {
      this.employees = this.employees.filter((e) => e !== employee);
      if (this.selectedEmployee === employee) {
        this.selectedEmployee = null;
      }
    });
  }

  onSelect(employee: Employee) {
    this.addingEmployee = false;
    this.selectedEmployee = employee;
  }

  enableAddMode() {
    this.addingEmployee = true;
    this.selectedEmployee = new Employee();
  }

  onAddEmployee() {
    if (this.addingEmployee) {
      this.employeeService
        .addEmployee(this.selectedEmployee)
        .subscribe((employee) => {
          this.addingEmployee = false;
          this.selectedEmployee = null;
          this.employees.push(employee);
        });
    } else {
      this.employeeService
        .updateEmployee(this.selectedEmployee)
        .subscribe((employee) => {
          this.addingEmployee = false;
          this.selectedEmployee = null;
        });
    }
  }
}
