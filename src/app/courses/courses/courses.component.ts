import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { FilterByTitlePipe } from '../courses-list-item/filter-by-title.pipe';


@Component({
  selector: 'vp-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @ViewChild(CoursesListComponent, {static: false})
  private coursesList: CoursesListComponent;

  constructor(private filter: FilterByTitlePipe) { }

  ngOnInit() {
  }

  searchCourseByTitle(event: string) {
    this.coursesList.coursesItems = this.filter.transform(this.coursesList.getCoursesList(), event);
  }
}
