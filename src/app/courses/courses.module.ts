import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CoursesHeaderComponent, CoursesListComponent, CoursesListItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CoursesHeaderComponent,
    CoursesListComponent
  ]
})
export class CoursesModule { }
