import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "../models/task";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class TaskListService {
  private user: User;

  private endpoint = "http://localhost:3000/api/contact-list/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-All-Origin": "*",
      "Access-Control-Allows-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) {}

  public getList(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public getTask(task: Task): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "edit/" + task._id,
      this.httpOptions
    );
  }

  public addTask(task: Task): Observable<any> {
    return this.http.post<any>(this.endpoint + "add", this.httpOptions);
  }

  public editTask(task: Task): Observable<any> {
    return this.http.post<any>(
      this.endpoint + "edit/" + task._id,
      task,
      this.httpOptions
    );
  }

  public deleteTask(task: Task): Observable<any> {
    return this.http.get<any>(
      this.endpoint + "delete/" + task._id,
      this.httpOptions
    );
  }
}
