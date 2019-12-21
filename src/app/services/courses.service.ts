import { Injectable } from '@angular/core';
import { CoursesListItem } from '../courses/courses-list-item/courses-list-item-model';
import { FilterByTitlePipe } from '../courses/courses-list-item/filter-by-title.pipe';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private filterValue: string;

  private courses: CoursesListItem[] = [     
    {
      id: 1,
      title: 'Video course #1 Intro',
      creationDate: new Date ('2020-04-11'),
      duration: 88,
      description: 'Description of the Video course #1 Learn about where you can find course descriptions, what information they include'
        + ', how they work, and details about various components of a course description. Course descriptions report information about a'
        + ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course'
        + ' schedules that contain descriptions for all courses offered during a particular semester',
      topRated: true
    },
    {
      id: 2,
      title: 'Video course #2 Components',
      creationDate: new Date ('2019-12-02'),
      duration: 48,
      description: 'Description of the Video course #2 Learn about where you can find course descriptions, what information they include'
        + ', how they work, and details about various components of a course description.',
      topRated: false
    },
    {
      id: 3,
      title: 'Video course #3 Unit Testing',
      creationDate: new Date ('2018-11-09'),
      duration: 75,
      description: 'Description of the Video course #3  Course descriptions report information about a university or college\'s classes.'
        + ' They\'re published both in course catalogs that outline degree requirements and in course schedules that contain'
        + ' descriptions for all courses offered during a particular semester',
      topRated: true
    },
    {
      id: 4,
      title: 'Video course #4 Directives and Pipes',
      creationDate: new Date ('2019-05-09'),
      duration: 63,
      description: 'Description of the Video course #4 They\'re published both in course catalogs that outline degree requirements'
        + ' and in course schedules that contain descriptions for all courses offered during a particular semester',
      topRated: false
    }
  ];


  constructor(private filterPipe: FilterByTitlePipe) { }

  getList() {
    return this.filterPipe.transform(this.courses, this.filterValue);
  }

  createCourse(item: CoursesListItem) {
    this.courses.push(item);
  }

  getItemById(id: number) {
    return this.courses.find(course => course.id === id);
  }

  updateItem(item: CoursesListItem) {
    let index = this.courses.findIndex(course => course.id === item.id);
    if (index !== -1) {
      this.courses[index] = item;
    }
  }

  removeItem(item: CoursesListItem) {
    this.removeItemByiD(item.id);
  }

  removeItemByiD(id: number) {
    let index = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  setFilter(filter: string) {
    this.filterValue = filter;
  }
}
