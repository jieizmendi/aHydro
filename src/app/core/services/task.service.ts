import { Injectable } from "@angular/core";

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";

import { Task } from "../models/task";
import {Module} from '../models/module';
import { map } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class TaskService {
  private url = "api/tasks";

  toLoad: number = null;

  tasks$: BehaviorSubject<Task[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {}

  loadForModule(_module: Module) {
    this._http
      .get<Task[]>(`${this.url}?module_id=${_module.id}`)
      .pipe(map(res => res.map(item => new Task().deserialize(item)).filter(task => task.date >= _module.start_at).sort((a,b)=> a.date>b.date?0:1)))
      .subscribe(res => this.tasks$.next(res));
    /*
    this.todoBackendService.getAllTodos()
        .subscribe(
            res => {
                let todos = (<Object[]>res.json()).map((todo: any) =>
                    new Todo({id:todo.id, description:todo.description,completed: todo.completed}));

                this._todos.next(List(todos));
            },
            err => console.log("Error retrieving Todos")
        );
        */
  }

  getAll(): Observable<Task[]> {
    return this._http
      .get<Task[]>(this.url)
      .pipe(map(res => res.map(item => new Task().deserialize(item))));
  }

  get(id: number): Observable<Task> {
    return this._http.get<Task>(`${this.url}/${id}`);
  }

  update(data: Task): Observable<any> {
    return this._http.put(this.url, data, httpOptions);
  }

  create(data: Task): Observable<any> {
    return this._http.post(this.url, data, httpOptions);
  }
}
