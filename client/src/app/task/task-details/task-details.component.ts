import { Component, OnInit } from "@angular/core";
import { TaskListService } from "src/app/services/task-list.service";
import { FlashMessagesService } from "angular2-flash-messages";

import { Router, ActivatedRoute } from "@angular/router";
import { ToDoList } from "src/app/models/task";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html",
  styleUrls: ["./task-details.component.css"]
})
export class TaskDetailsComponent implements OnInit {
  title: string;
  task: ToDoList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private taskListService: TaskListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.data.title;
    this.task = new ToDoList();

    this.activatedRoute.params.subscribe(params => {
      this.task._id = params.id;
    });

    if (this.title === "Edit Task") {
      this.displayTask(this.task);
    }
  }

  private displayTask(task: ToDoList): void {
    this.taskListService.getTask(task).subscribe(data => {
      this.task = data.task;
    });
  }

  public onDetailsPageSubmit(): void {
    switch (this.title) {
      case "Add Task":
        this.taskListService.addTask(this.task).subscribe(data => {
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
        this.taskListService.editTask(this.task).subscribe(data => {
          if (data.success) {
            // this.flashMessage.show(data.msg, {
            //   ccsClass: "alert-success",
            //   timeout: 3000
            // });

            console.log("Shit is working");
            this.router.navigate(["/task/task-list"]);
          } else {
            // this.flashMessage.show("Edit Task Failed", {
            //   ccsClass: "alert-danger",
            //   timeout: 3000
            // });

            console.log("Shit not working");
            this.router.navigate(["/task/task-list"]);
          }
        });

        break;
    }
  }
}
