import { Component, OnInit } from "@angular/core";
import { ToDoList } from "src/app/models/task";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { TaskListService } from "src/app/services/task-list.service";

@Component({
  selector: "app-task-delete",
  templateUrl: "./task-delete.component.html",
  styleUrls: ["./task-delete.component.css"]
})
export class TaskDeleteComponent implements OnInit {
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

    this.deleteContact(this.task);
  }

  private deleteContact(task: ToDoList): void {
    this.taskListService.deleteTask(task).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: "alert-warning",
          timeOut: 3000
        });
        this.router.navigate(["/task/task-list"]);
      } else {
        this.flashMessage.show("Delete Contact Failed", {
          cssClass: "alert-danger",
          timeOut: 3000
        });
        this.router.navigate(["/task/task-list"]);
      }
    });
  }
}
