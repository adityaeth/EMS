import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash', component: DashComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'joblist', component: JobListComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
