import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

import {Post} from "../interfaces/post.interface";
import {environment} from "../environments";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getAll(url: string): Observable<any>  {
    return this.http.get<any>(`${environment.baseUrl}${url}`).pipe(
      map(object => this.getResults(object)),
      catchError((error) => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something went wrong. Please try again later.'))
      })
    )
  }

  private getResults(object: Object): any {
    if ("results" in object) {
      return object.results as Post[]
    } else {
      return object
    }
  }
}
