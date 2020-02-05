import { Injectable } from '@angular/core';
import { CoursesAuthor } from '../courses/courses-list-item/courses-author-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface IAuthor {
  id: string;
  name: string;
}

const BASE_URL = 'http://localhost:3004/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor( private http: HttpClient) { }

  getList(filter: string): Observable</*CoursesAuthor*/IAuthor[]> {
      return this.http
        .get<IAuthor[]>(
          BASE_URL,  
          filter == null ? {} :{ params : { textFragment: filter } });

  }
}
