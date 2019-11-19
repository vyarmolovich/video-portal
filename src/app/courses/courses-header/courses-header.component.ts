import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vp-courses-header',
  templateUrl: './courses-header.component.html',
  styleUrls: ['./courses-header.component.css']
})
export class CoursesHeaderComponent implements OnInit {
  faSearch = faSearch;
  faPlus = faPlus;

  search : string = '';

  constructor() { }

  ngOnInit() {
  }

  searchCourses() {
    console.log('Try to search courses by keyword: ' + this.search);
  }
}
