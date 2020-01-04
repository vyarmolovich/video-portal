import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';


@Component({
  selector: 'vp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {

  @Input()
  coursesItems: CoursesListItem[];

  @Output()
  deleteEvent: EventEmitter<CoursesListItem> = new EventEmitter<CoursesListItem>();

  @Output()
  editEvent: EventEmitter<number> = new EventEmitter<number>();

  deleteCourseById(id: number) {
    let index = this.coursesItems.findIndex(course => course.id === id);
    this.deleteEvent.emit(this.coursesItems[index]);
  }

  editCourseById(id: number) {
    this.editEvent.emit(id);
  }
}