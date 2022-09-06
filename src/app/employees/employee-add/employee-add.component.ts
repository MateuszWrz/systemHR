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
  selectedEmployee: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  cancel() {
    this.addingEmployee = false;
    this.selectedEmployee = null;
  }

  enableAddMode() {
    this.addingEmployee = true;
    this.selectedEmployee = new Employee();
  }
  onAddEmployee() {
    //   if (this.addingEmployee) {
    //     this.employeeService
    //       .addEmployee(this.selectedEmployee)
    //       .subscribe((employee) => {
    //         this.addingEmployee = false;
    //         this.selectedEmployee = null;
    //         this.employees.push(employee);
    //         console.log(employee);
    //       });
    //   } else {
    //     this.employeeService
    //       .updateEmployee(this.selectedEmployee)
    //       .subscribe((employee) => {
    //         this.addingEmployee = false;
    //         this.selectedEmployee = null;
    //         console.log(employee);
    //       });
    //   }

    this.employees = this.employeeService
      .addEmployee(this.selectedEmployee)
      .subscribe((employee) => {
        this.employees.push(employee);
        // console.log(employee);
      });
  }
}
