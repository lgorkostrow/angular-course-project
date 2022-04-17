import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class BaseRepository {
  constructor(private httClient: HttpClient) {}

  protected sendGet<T>(url: string): Observable<T> {
    return this.httClient.get<T>('http://localhost:3000' + url);
  }
}
