import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item/courses-list-item-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { CoursesAuthor } from '../courses/courses-list-item/courses-author-model';


interface ICourse {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: Date;
  authors: IAuthor[];
  length: number;
}

interface IAuthor {
  id: number;
  name: string;
  lastName: string;
}

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private http: HttpClient) { }

  getList(filter: string, pageSize: number): Observable<CoursesListItem[]> {
      return this.http
        .get<ICourse[]>(
          BASE_URL + '?start=0&count=' + pageSize,  
          filter == null ? {} :{ params : { textFragment: filter } })
        .pipe(map((items : ICourse[]) => {
          return items.map((item: ICourse) => {
            return {
              id: item.id,
              title: item.name,
              creationDate: item.date,
              duration: item.length,
              description: item.description,
              topRated: item.isTopRated,
              authors: item.authors.map((author: IAuthor) => { 
                  return { id: author.id, name: author.name, lastName: author.lastName }})
            }
          })
        }));
  }

  createCourse(item: CoursesListItem): Observable<CoursesListItem> {
    return this.http
      .post<ICourse>( BASE_URL, 
        {
          id: item.id, 
          name: item.title,
          date: item.creationDate,
          length: item.duration,
          authors: item.authors.map((author: CoursesAuthor) => { 
            return { id: author.id, name: author.name, lastName: author.lastName }}),
          isTopRated: item.topRated
        })
      .pipe(
        map((item: ICourse) => {
          return {
            id: item.id,
            title: item.name,
            creationDate: item.date,
            duration: item.length,
            description: item.description,
            topRated: item.isTopRated,
            authors: item.authors.map((author: IAuthor) => { 
              return { id: author.id, name: author.name, lastName: author.lastName }})
          }
        }),
        catchError(this.handleError));
  }

  getItemById(id: number): Observable<CoursesListItem> {
    return this.http
      .get<ICourse>(BASE_URL + '/' + id)
      .pipe(map((item : ICourse) => {
          return {
            id: item.id,
            title: item.name,
            creationDate: item.date,
            duration: item.length,
            description: item.description,
            topRated: item.isTopRated,
            authors: item.authors.map((author: IAuthor) => { 
              return { id: author.id, name: author.name, lastName: author.lastName }})
        }
      }));
  }

  updateItem(item: CoursesListItem): Observable<CoursesListItem> {
    return this.http
      .patch<ICourse>( BASE_URL, 
        {
          id: item.id, 
          name: item.title,
          date: item.creationDate,
          length: item.duration,
          authors: item.authors.map((author: CoursesAuthor) => { 
            return { id: author.id, name: author.name, lastName: author.lastName }}),
          isTopRated: item.topRated
        })
      .pipe(
        map((item: ICourse) => {
          return {
            id: item.id,
            title: item.name,
            creationDate: item.date,
            duration: item.length,
            description: item.description,
            topRated: item.isTopRated,
            authors: item.authors.map((author: IAuthor) => { 
              return { id: author.id, name: author.name, lastName: author.lastName }})
          }
        }),
        catchError(this.handleError));
  }

  removeItem(item: CoursesListItem): Observable<any> {
    return this.http
      .delete<ICourse>( BASE_URL + '/' + item.id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code: ' + error.status + ' + body was: ' + error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
