import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Contracts } from 'src/app/models/contracts.model';
import { ContractsService } from 'src/app/services/contracts.service';
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
    console.log(this.newEmployee);
    this.employeeService.addEmployee(this.newEmployee).subscribe({
      next: (employee) => {
        this.employees.push(employee);
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.employees);
  }
}
