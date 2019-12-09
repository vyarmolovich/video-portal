import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';

@Component({
  selector: 'vp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[];

  constructor() { }

  ngOnInit() {
    this.coursesItems = [
      {
        id: 1,
        title: 'Vide course #1 Title',
        creationDate: new Date ('2018-11-09'),
        duration: '1h 28 min',
        description: 'Description of the Video course #1 Learn about where you can find course descriptions, what information they include'
          + ', how they work, and details about various components of a course description. Course descriptions report information about a'
          + ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course'
          + ' schedules that contain descriptions for all courses offered during a particular semester',
        topRated: true
      },
      {
        id: 2,
        title: 'Vide course #2 Title',
        creationDate: new Date ('2019-12-02'),
        duration: '48 min',
        description: 'Description of the Video course #2 Learn about where you can find course descriptions, what information they include'
          + ', how they work, and details about various components of a course description.',
        topRated: false
      },
      {
        id: 3,
        title: 'Vide course #3 Title',
        creationDate: new Date ('2020-04-11'),
        duration: '1h 15 min',
        description: 'Description of the Video course #3  Course descriptions report information about a university or college\'s classes.'
          + ' They\'re published both in course catalogs that outline degree requirements and in course schedules that contain'
          + ' descriptions for all courses offered during a particular semester',
        topRated: true
      }
    ];
  }

  deleteCourseById(event: number) {
    console.log('Deleting course by #id:' + event);
  }
}
