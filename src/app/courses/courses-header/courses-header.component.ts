import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { COURSES_PATH } from 'src/app/app-routing.module';

@Component({
  selector: 'vp-courses-header',
  templateUrl: './courses-header.component.html',
  styleUrls: ['./courses-header.component.css']
})
export class CoursesHeaderComponent implements OnInit {

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  faSearch = faSearch;
  faPlus = faPlus;

  search = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchCourses() {
    this.searchEvent.emit(this.search);
  }

  addCourse() {
    this.router.navigate([COURSES_PATH.courses_new]);
  }
}
