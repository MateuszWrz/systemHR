import { Component, Input, OnInit } from '@angular/core';
import { Contracts } from 'src/app/models/contracts.model';
import { Employee } from 'src/app/models/employee.model';
import { ContractsService } from 'src/app/services/contracts.service';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css'],
  providers: [ContractsService],
})
export class EditEmployeesComponent implements OnInit {
  contracts: Contracts[];
  employees: Employee[];

  @Input() employee: any;
  constructor(
    private contractService: ContractsService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.LoadContracts();
  }

  LoadContracts() {
    this.contractService.getContracts().subscribe({
      next: (res: Contracts[]) => {
        this.contracts = res;
      },
    });
  }

  onUpdateEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe({
      next: (res) => {},
      error: (err) => {
        console.log(err);
      },
    });
  }
}
