import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService],
})
export class EmployeeAddComponent implements OnInit {
  // employeeForm = this.formBuilder.group({
  //   name: new FormControl(''),
  //   lastname: new FormControl(''),
  //   adress: new FormControl(''),
  //   numberPhone: new FormControl(''),
  //   dateOfBirth: new FormControl(''),
  //   dateOfEmployment: new FormControl(''),
  //   contract: new FormControl(''),
  // });
  addingEmployee = false;
  employees: any = [];
  newEmployee: Employee;
  submitted = false;
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.addingEmployee = false;
    this.newEmployee = null;
  }

  onSubmit() {
    this.submitted = true;
  }
  // enableAddMode() {
  //   this.addingEmployee = true;
  //   this.selectedEmployee = new Employee();
  // }
  onAddEmployee() {
    //   this.employees = this.employeeService
    //     .addEmployee(this.newEmployee)
    //     .subscribe((res) => {
    //       this.employees.push(res);
    //       console.log(res);
    //     });
    // }
    this.employeeService.addEmployee(this.newEmployee).subscribe((employee) => {
      this.employees.push(employee);
    });
    console.log(this.employees);
  }
}
