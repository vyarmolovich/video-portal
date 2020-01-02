import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'vp-courses-add-or-edit',
  templateUrl: './courses-add-or-edit.component.html',
  styleUrls: ['./courses-add-or-edit.component.css']
})
export class CoursesAddOrEditComponent {

  faCalendar = faCalendar;
  
  constructor(private router: Router) { }

  save() {
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
