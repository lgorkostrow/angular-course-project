import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class BaseRepository {
  constructor(
    private apiUrl: string,
    private httClient: HttpClient,
  ) {}

  protected sendGet<T>(url: string): Observable<T> {
    return this.httClient.get<T>(this.generateUrl(url));
  }

  private generateUrl(route: string): string {
    return this.apiUrl.endsWith('/')
      ? this.apiUrl.slice(0, -1) + '/' + (route.startsWith('/') ? route.slice(1, route.length) : route)
      : this.apiUrl + '/' + (route.startsWith('/') ? route.slice(1, route.length) : route);
  }
}
