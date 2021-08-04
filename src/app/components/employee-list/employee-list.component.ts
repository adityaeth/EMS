import { Component, OnInit } from '@angular/core';
import { EmployeeList } from 'src/app/models/employeelist';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeList[] = [];
  constructor() { }

  ngOnInit(): void {

    this.employees = [
      {
        id: 1,
        joiningDate: '25-6-20',
        name: 'Aditya Pra',
        mail: 'mail@test.com',
        phone: '752031216',
        job: 'Web Developer'
      },
      {
        id: 2,
        joiningDate: '25-6-20',
        name: 'Kingshuk',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Software Developer'
      },
      {
        id: 3,
        joiningDate: '25-6-20',
        name: 'Kingshuk',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Software Developer'
      },
      {
        id: 4,
        joiningDate: '25-6-20',
        name: 'Kingshuk',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Software Developer'
      },
      {
        id: 5,
        joiningDate: '25-6-20',
        name: 'Kingshuk',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Software Developer'
      }
    ]
  }
  delete(id: number) {
    console.log("delete called!");
    this.employees.splice(id,1);
  }
}