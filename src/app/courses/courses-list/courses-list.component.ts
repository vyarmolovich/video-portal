import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { CoursesService } from '../../services/courses.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CoursesDeleteDialogComponent } from '../courses-delete-dialog/courses-delete-dialog.component';



@Component({
  selector: 'vp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  deleteDialogRef: MatDialogRef<CoursesDeleteDialogComponent>;

  public coursesItems: CoursesListItem[];

  constructor(private coursesService: CoursesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.coursesItems = this.coursesService.getList();
  }

  deleteCourseById(id: number) {
    let index = this.coursesItems.findIndex(course => course.id === id);

    this.deleteDialogRef = this.dialog.open(CoursesDeleteDialogComponent, {
      data: {title: this.coursesItems[index].title}
    });

    this.deleteDialogRef
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.coursesService.removeItemByiD(id);
          this.coursesItems = this.coursesService.getList();
        }
      });
  }
}