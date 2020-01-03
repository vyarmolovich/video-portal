import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CoursesListItem } from './courses-list-item-model';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vp-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent {
  @Input()
  item: CoursesListItem;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  faClock = faClock;
  faCalendarAlt = faCalendarAlt;
  faPen = faPen;
  faTrash = faTrash;
  faStar = faStar;

  deleteCourse() {
    this.delete.emit(this.item.id);
  }
}
