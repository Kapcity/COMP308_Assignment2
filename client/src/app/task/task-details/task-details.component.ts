import { Component, OnInit } from "@angular/core";
import { TaskListService } from "src/app/services/task-list.service";
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { Router, ActivatedRoute } from "@angular/router";
import { Task } from "src/app/models/task";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.css"]
})
export class TaskDetailsComponent implements OnInit {
  title: String;
  Task: Task;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private taskListService: TaskListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.Task = new Task();
  }

  private onDetailsPageSubmit(): void {
    switch (this.title) {
      case "Add Task":
        this.taskListService.addTask(this.Task).subscribe(data => {
          if (data.success) {
            this.flashMessage.show(data.msg, {
              ccsClass: "alert-success",
              timeout: 3000
            });
            this.router.navigate(["/task/task-list"]);
          } else {
            this.flashMessage.show("Add Task Failed", {
              ccsClass: "alert-danger",
              timeout: 3000
            });
            this.router.navigate(["/task/task-list"]);
          }
        });
        break;

      case "Edit Task":
        break;
    }
  }
}
