import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//calls inputs
import { HomeComponent } from "./pages/home/home.component";

import { ServicesComponent } from "./pages/services/services.component";
import { EducationComponent } from "./pages/education/education.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AboutComponent } from "./pages/about/about.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ProjectComponent } from "./pages/project/project.component";
import { TaskListComponent } from "./task/task-list/task-list.component";
import { TaskDetailsComponent } from "./task/task-details/task-details.component";
import { TaskDeleteComponent } from "./task/task-delete/task-delete.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "about", component: AboutComponent, data: { title: "About" } },
  { path: "project", component: ProjectComponent, data: { title: "Project" } },
  {
    path: "services",
    component: ServicesComponent,
    data: { title: "Services" }
  },
  {
    path: "education",
    component: EducationComponent,
    data: { title: "Education" }
  },
  { path: "contact", component: ContactComponent, data: { title: "Contact" } },
  {
    path: "task/task-list",
    component: TaskListComponent,
    data: { title: "Task-List" }
  },
  {
    path: "task/task-list/add",
    component: TaskDetailsComponent,
    data: { title: "Add Task" }
  },
  {
    path: "task/task-list/edit/:id",
    component: TaskDetailsComponent,
    data: { title: "Edit Task" }
  },
  {
    path: "task/task-list/delete",
    component: TaskDeleteComponent,
    data: { title: "Delete Task" }
  },

  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register User" }
  },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
