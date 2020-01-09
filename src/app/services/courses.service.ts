import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item/courses-list-item-model';
import { FilterByTitlePipe } from '../courses/courses-list-item/filter-by-title.pipe';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


interface ICourse {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: Date;
  authors: [
    // {
    //   "id": 1370,
    //   "name": "Polly",
    //   "lastName": "Sosa"
    // }
  ];
  length: number;
}

const PAGE_SIZE = 4;

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private filterValue: string;
  private coursesCount: number = PAGE_SIZE;

  constructor(private filterPipe: FilterByTitlePipe, private http: HttpClient) { }

  getList() {
      return this.http
        .get<ICourse[]>(
          'http://localhost:3004/courses?start=0&count=' + this.coursesCount,  
          this.filterValue == null ? {} :{ params : { textFragment: this.filterValue } })
        .pipe(map((items : ICourse[]) => {
          return items.map((item: ICourse) => {
            return {
              id: item.id,
              title: item.name,
              creationDate: item.date,
              duration: item.length,
              description: item.description,
              topRated: item.isTopRated,
              authors: item.authors
            }
          })
        }));
  }

  createCourse(item: CoursesListItem) {
    this.http
      .post<ICourse>('http://localhost:3004/courses', 
        {
          id: item.id, 
          name: item.title,
          date: item.creationDate,
          length: item.duration,
          authors: item.authors,
          isTopRated: item.topRated
        })
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  getItemById(id: number) {
    return this.http
    .get<ICourse>(
      'http://localhost:3004/courses/' + id)
    .pipe(map((item : ICourse) => {
        return {
          id: item.id,
          title: item.name,
          creationDate: item.date,
          duration: item.length,
          description: item.description,
          topRated: item.isTopRated,
          authors: item.authors
      }
    }));
  }

  updateItemById(id: number) {
    // let index = this.courses.findIndex(course => course.id === item.id);
    // if (index !== -1) {
    //   this.courses[index] = item;
    // }
  }

  removeItem(item: CoursesListItem) {
    this.removeItemByiD(item.id);
  }

  removeItemByiD(id: number) {
    this.http
      .delete('http://localhost:3004/courses/' + id)
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  setFilter(filter: string) {
    this.filterValue = filter;
  }

  loadMore() {
    this.coursesCount += PAGE_SIZE;
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
