import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IDeleteDialogData } from './courses-delete-dialog-data';

@Component({
  selector: 'vp-courses-delete-dialog',
  templateUrl: './courses-delete-dialog.component.html',
  styleUrls: ['./courses-delete-dialog.component.css']
})
export class CoursesDeleteDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDeleteDialogData) { }

}
