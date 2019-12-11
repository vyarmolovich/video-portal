import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { FilterByTitlePipe } from '../courses-list-item/filter-by-title.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'vp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesItems = this.coursesService.getList();
  }

  deleteCourseById(event: number) {
    const confirm = window.confirm('Do you really want to delete this course?');
    if (confirm) {
      this.coursesService.removeItemByiD(event);
      this.coursesItems = this.coursesService.getList();
    }
  }
}
