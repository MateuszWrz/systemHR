import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Contracts } from 'src/app/models/contracts.model';
import { ContractsService } from 'src/app/services/contracts.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [ContractsService, EmployeeService],
})
export class EmployeeAddComponent implements OnInit {
  addingEmployee = false;
  employees: any = [];
  newEmployee: Employee;
  submitted = false;
  contracts: Contracts[];

  constructor(
    private employeeService: EmployeeService,
    private contractsService: ContractsService
  ) {}
  addEmployeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    adress: new FormControl('', [Validators.required]),
    numberPhone: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    dateOfEmployment: new FormControl('', [Validators.required]),
    contract: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.LoadContracts();
    this.newEmployee = new Employee();
  }

  cancel() {
    this.addingEmployee = false;
    this.newEmployee = null;
  }

  LoadContracts() {
    this.contractsService.getContracts().subscribe((res) => {
      console.log(res);
    });
  }

  onAddEmployee() {
    this.employees = this.addEmployeeForm.value;
    this.employeeService.addEmployee(this.newEmployee).subscribe({
      next: (employee) => {
        this.employees.push(employee);
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.employees);

    // console.log(employeeData);
    // this.employeeService.addEmployee(employeeData).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
