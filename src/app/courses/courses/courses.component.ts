import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { CoursesDeleteDialogComponent } from '../courses-delete-dialog/courses-delete-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { COURSES_PATH } from 'src/app/app-routing.module';


@Component({
  selector: 'vp-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  deleteDialogRef: MatDialogRef<CoursesDeleteDialogComponent>;

  constructor(private authService: AuthService, private router: Router, private coursesService: CoursesService, private dialog: MatDialog) { }

  searchCourseByTitle(event: string) {
    this.coursesService.setFilter(event);
  }
  
  deleteCourse(item: CoursesListItem) {
    if (!this.authService.isAuthenticated()) { 
      this.authService.setRedirectUrl(COURSES_PATH.courses);
      this.router.navigate([COURSES_PATH.login]);
      return; 
    }

    this.deleteDialogRef = this.dialog.open(CoursesDeleteDialogComponent, {
      height: '212px',
      width: '394px',
      data: {title: item.title}
    });

    this.deleteDialogRef
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.coursesService.removeItem(item);
        }
      });
  }

  editCourse(id: number) {
    this.router.navigate([COURSES_PATH.courses + '/' + id]);
  }

  getCourses() {
    return this.coursesService.getList();
  }
}
