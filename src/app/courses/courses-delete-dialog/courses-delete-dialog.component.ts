import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'vp-courses-delete-dialog',
  templateUrl: './courses-delete-dialog.component.html',
  styleUrls: ['./courses-delete-dialog.component.css']
})
export class CoursesDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
}
