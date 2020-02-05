import { Injectable } from '@angular/core';
import { CoursesAuthor } from '../courses/courses-list-item/courses-author-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface IAuthor {
  id: number;
  name: string;
  lastName: string;
}

const BASE_URL = 'http://localhost:3004/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor( private http: HttpClient) { }

  getList(filter: string): Observable<CoursesAuthor[]> {
      return this.http
        .get<IAuthor[]>(
          BASE_URL,  
          filter == null ? {} :{ params : { textFragment: filter } })
        .pipe(map((items: IAuthor[]) => {
          return items.map((item: IAuthor) => {
            return {
              id: item.id,
              name: item.name,
              lastName: item.lastName
            }
          })
        })
      );
  }
}
