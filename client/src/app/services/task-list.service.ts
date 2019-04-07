import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ToDoList } from "../models/task";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class TaskListService {
  private user: User;
  private authToken: any = null;

  //  private endpoint = "http://localhost:3000/api/task-list/";
  private endpoint =
    "https://comp308-assignment2-kapilan.herokuapp.com/api/task-list/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-All-Origin": "*",
      "Access-Control-Allows-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getTask(task: ToDoList): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "edit/" + task._id,
      this.httpOptions
    );
  }

  public addTask(task: ToDoList): Observable<any> {
    return this.http.post<any>(this.endpoint + "add", task, this.httpOptions);
  }

  public editTask(task: ToDoList): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "edit/" + task._id,
      task,
      this.httpOptions
    );
  }

  public deleteTask(task: ToDoList): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "delete/" + task._id,
      this.httpOptions
    );
  }
}
