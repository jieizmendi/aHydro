import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { Module } from "../models/module";
import { Task } from "../models/task";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
import { Subject } from "rxjs";
import { TaskService } from "./task.service";

@Injectable()
export class ModuleService {
  protected url = "api/modules";
  isCurrentLoad: boolean = false;

  //protected currentModule: Module;

  module$ = new BehaviorSubject<Module>(new Module());
  selectedId: number = 0;

  constructor(protected _http: HttpClient, private taskService: TaskService) {
    this.selectedId = 0;
  }

  getAll(): Observable<Module[]> {
    return this._http.get<Module[]>(this.url);
  }

  setCurrent(id: number) {
    this._http.get<Module>(`${this.url}/${id}`).subscribe(_moduleData => {
      const _module = new Module().deserialize(_moduleData);
      this.module$.next(_module);
      this.taskService.loadForModule(_module);
    });
  }

  setCuerrent(id: number): Observable<Module> {
    return this.module$.asObservable();
  }

  getConfigurations() {}

  getCuerrent(): Observable<Module> {
    return this.module$.asObservable();
  }

  update(m: Module): Observable<any> {
    return this._http.put(this.url, m, httpOptions);
  }
}
