import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskListService } from 'src/app/services/task-list.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(
    private taskListService: TaskListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tasks = new Array<Task>();
    this.displayTaskList();
  }

  displayTaskList(): void 
  {
    this.taskListService.getList().subscribe(data => {
      if (data.success)
    {
      console.log(data);
      this.tasks = data.taskList;
    }
    else
    {
      this.flashMessage.show('User must be logged-in', {cssClass: 'Alert Danger', timeOut:3000});
    }
    })
  }

}
