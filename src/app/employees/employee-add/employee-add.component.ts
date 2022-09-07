import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService],
})
export class EmployeeAddComponent implements OnInit {
  addingEmployee = false;
  employees: any = [];
  newEmployee: Employee;
  constructor(
    private employeeService: EmployeeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.addingEmployee = false;
    this.newEmployee = null;
  }

  // enableAddMode() {
  //   this.addingEmployee = true;
  //   this.selectedEmployee = new Employee();
  // }
  onAddEmployee() {
    this.employees = this.employeeService
      .addEmployee(this.newEmployee)
      .subscribe((res) => {
        this.employees.push(res);
        console.log(res);
      });
  }
}
