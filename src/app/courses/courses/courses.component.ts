import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CoursesService } from '../../services/courses.service';


@Component({
  selector: 'vp-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @ViewChild(CoursesListComponent, {static: false})
  private coursesList: CoursesListComponent;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  searchCourseByTitle(event: string) {
    this.coursesService.setFilter(event);
    this.coursesList.ngOnInit();
  }
}
