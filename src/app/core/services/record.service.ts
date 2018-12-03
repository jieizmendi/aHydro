import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Record } from "../models/record";

@Injectable()
export class RecordService {
  private url = "api/records";

  constructor(private _http: HttpClient) {}

  getByModule(id: number): Observable<Record[]> {
    return this._http
      .get<Record[]>(`${this.url}?module_id=${id}`)
      .pipe(map(res => res.map(item => new Record().deserialize(item))));
  }
}
