import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//calls inputs
import { HomeComponent } from './pages/home/home.component';

import { ServicesComponent } from './pages/services/services.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectComponent } from './pages/project/project.component';
import { TaskListComponent } from './task/task-list/task-list.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent, data:{title:'Home'}},
  {path: 'about', component : AboutComponent, data:{title:'About'}},
  {path: 'project', component : ProjectComponent, data:{title:'Project'}},
  {path: 'services', component : ServicesComponent, data:{title:'Services'}},
 {path: 'education', component : EducationComponent, data:{title:'Education'}},
 {path: 'contact', component : ContactComponent, data:{title:'Contact'}},
 {path: 'task/task-list', component : TaskListComponent, data:{title:'Task-List'}},
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
