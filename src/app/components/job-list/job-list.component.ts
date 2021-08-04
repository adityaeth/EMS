import { Component, OnInit } from '@angular/core';
import { JobList } from 'src/app/models/joblist';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html'
})
export class JobListComponent implements OnInit {

  jobs: JobList[] = [];
  retid!: number;
  constructor() { }

  ngOnInit(): void {

    this.jobs = [
      {
        id: 1,
        jobAdded: '25-06-20',
        job: 'Web Developer'
      },
      {
        id: 2,
        jobAdded: '11-10-19',
        job: 'Web Designer'
      },
      {
        id: 3,
        jobAdded: '11-10-19',
        job: 'Graphic Developer'
      },
      {
        id: 4,
        jobAdded: '11-10-19',
        job: 'App Developer'
      },
      {
        id: 5,
        jobAdded: '11-10-19',
        job: 'Graphic Designer'
      }
    ]
  }

  getid(id: number) {
    this.retid = id;
  }
  delete(retid: number) {
    this.jobs.splice(retid, 1);
  }
}
