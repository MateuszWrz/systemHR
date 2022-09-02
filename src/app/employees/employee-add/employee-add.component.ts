import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeListService } from 'src/app/services/employee-list.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers: [EmployeeService, EmployeeListService],
})
export class EmployeeAddComponent implements OnInit {
  @Input() employees: Employee[];
  @ViewChild('nameEmployee') nameInputRef: ElementRef;
  @ViewChild('surnameEmployee') surnameInputRef: ElementRef;
  @ViewChild('birthEmployee') birthInputRef: ElementRef;
  @ViewChild('employmentEmployee') employmentInputRef: ElementRef;
  @ViewChild('contractEmployee') contractInputRef: ElementRef;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  onAddEmployee() {
    // this.employeeService.employeesAdd();

    const empName = this.nameInputRef.nativeElement.value;
    const empSurname = this.surnameInputRef.nativeElement.value;
    const empBirth = this.birthInputRef.nativeElement.value;
    const empEmployment = this.employmentInputRef.nativeElement.value;
    const empContract = this.contractInputRef.nativeElement.value;
    const newEmployee = new Employee(
      empName,
      empSurname,
      empBirth,
      empEmployment,
      empContract
    );
    this.employees.push(newEmployee);
    console.log(newEmployee);
  }
}
