import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesLoadMoreComponent } from './courses-load-more/courses-load-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './courses-list-item/highlight.directive';

@NgModule({
  declarations: [
    CoursesHeaderComponent, 
    CoursesListComponent, 
    CoursesListItemComponent, 
    CoursesLoadMoreComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    CoursesHeaderComponent,
    CoursesListComponent,
    CoursesLoadMoreComponent
  ]
})
export class CoursesModule { }
