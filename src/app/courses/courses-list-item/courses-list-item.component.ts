import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesListItem } from './courses-list-item-model';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vp-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input() 
  item: CoursesListItem;

  @Output() 
  delete: EventEmitter<number> = new EventEmitter<number>();

  faClock = faClock;
  faCalendarAlt = faCalendarAlt;
  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit() {
  }

  deleteCourse() {
    this.delete.emit(this.item.id);
  }
}
