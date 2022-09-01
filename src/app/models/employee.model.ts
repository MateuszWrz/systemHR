export class Employee {
  name: string;
  surname: string;
  dateOfBirth: Date;
  dateOfEmployment: Date;
  contract: string;

  constructor(
    name: string,
    surname: string,
    birth: Date,
    employment: Date,
    contract: string
  ) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = birth;
    this.dateOfEmployment = employment;
    this.contract = contract;
  }
}
