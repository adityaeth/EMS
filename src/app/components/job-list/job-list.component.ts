import { Component, OnInit } from '@angular/core';
import { JobList } from 'src/app/models/joblist';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html'
})
export class JobListComponent implements OnInit {

  jobs: JobList[] = [];
  retid: number = 0;
  id: number   = 0;
  jobAdded: string = "";
  job: string =  "";
  constructor() { }

  ngOnInit(): void {

    this.jobs = [
      {
        id: 1001,
        jobAdded: '06/25/20',
        job: 'Web Developer'
      },
      {
        id: 1002,
        jobAdded: '11/10/19',
        job: 'Web Designer'
      },
      {
        id: 1003,
        jobAdded: '11/16/19',
        job: 'Graphic Developer'
      },
      {
        id: 1004,
        jobAdded: '11/30/19',
        job: 'App Developer'
      },
      {
        id: 1005,
        jobAdded: '01/26/19',
        job: 'Software Developer'
      }
    ]
  }

  getid(id: number) {
    this.retid = id;
  }
  delete(retid: number) {
    this.jobs.splice(retid, 1);
  }
  add(){
    this.jobs.push({
      id: this.id,
      jobAdded: this.jobAdded,
      job: this.job
    })
  }
}
