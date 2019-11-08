import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';



@NgModule({
  declarations: [CoursesHeaderComponent, CoursesListComponent, CoursesListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesHeaderComponent,
    CoursesListComponent
  ]
})
export class CoursesModule { }
