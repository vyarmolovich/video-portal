import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';

@Component({
  selector: 'vp-courses-add-or-edit',
  templateUrl: './courses-add-or-edit.component.html',
  styleUrls: ['./courses-add-or-edit.component.css']
})
export class CoursesAddOrEditComponent {

  item: CoursesListItem = {
      id: null,
      title: null,
      creationDate: null,
      duration: null,
      description: null,
      topRated: null,
      authors: []
  };

  faCalendar = faCalendar;
  
  constructor(private router: Router) { }

  save() {
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
