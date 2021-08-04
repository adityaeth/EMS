import { Component, OnInit } from '@angular/core';
import { EmployeeList } from 'src/app/models/employeelist';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeList[] = [];
  retid: number = 0;
  constructor() { }

  ngOnInit(): void {

    this.employees = [
      {
        id: 1,
        joiningDate: '25-6-20',
        name: 'Aditya Prakash',
        mail: 'mail@test.com',
        phone: '752031216',
        job: 'Web Developer'
      },
      {
        id: 2,
        joiningDate: '25-6-20',
        name: 'Kingshuk Nath',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Web Developer'
      },
      {
        id: 3,
        joiningDate: '25-6-20',
        name: 'Aftab Mustafa',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Graphic Designer'
      },
      {
        id: 4,
        joiningDate: '25-6-20',
        name: 'Debangan Roy',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Web Designer'
      },
      {
        id: 5,
        joiningDate: '25-6-20',
        name: 'Nisha Dan',
        mail: 'mail@test.com',
        phone: '752651216',
        job: 'Software Developer'
      }
    ]
  }
  getid(id: number) {
    this.retid = id;
  }
  delete(retid: number) {
    this.employees.splice(retid, 1);
  }
}