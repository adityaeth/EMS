import { Component, OnInit } from '@angular/core';
import { JobList } from 'src/app/models/joblist';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html'
})
export class JobListComponent implements OnInit {

  jobs: JobList[] = [];
  constructor() { }

  ngOnInit(): void {

    this.jobs = [
      {
        id: 1,
        jobAdded: '25-6-20',
        job: 'Web Developer'
      },
      {
        id: 2,
        jobAdded: '11-10-19',
        job: 'Software Developer'
      },
      {
        id: 3,
        jobAdded: '11-10-19',
        job: 'Software Developer'
      },
      {
        id: 4,
        jobAdded: '11-10-19',
        job: 'Software Developer'
      },
      {
        id: 5,
        jobAdded: '11-10-19',
        job: 'Software Developer'
      }
    ]
  }

  delete(id: number) {
    console.log("delete called!");
    this.jobs.splice(id,1);
  }
}