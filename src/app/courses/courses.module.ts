import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CoursesHeaderComponent } from './courses-header/courses-header.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesLoadMoreComponent } from './courses-load-more/courses-load-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './courses-list-item/highlight.directive';
import { OrderByPipe } from './courses-list-item/order-by.pipe';
import { FilterByTitlePipe } from './courses-list-item/filter-by-title.pipe';
import { CoursesComponent } from './courses/courses.component';
import { DurationPipe } from './courses-list-item/duration.pipe';
import { CoreModule } from '../core/core.module';
import { MatDialogModule } from '@angular/material';
import { CoursesDeleteDialogComponent } from './courses-delete-dialog/courses-delete-dialog.component';
import { CoursesAddOrEditComponent } from './courses-add-or-edit/courses-add-or-edit.component';
import { DateInputComponent } from './form/date-input/date-input.component';
import { DurationInputComponent } from './form/duration-input/duration-input.component';
import { AuthorsInputComponent } from './form/authors-input/authors-input.component';

@NgModule({
  declarations: [
    CoursesHeaderComponent, 
    CoursesListComponent, 
    CoursesListItemComponent, 
    CoursesLoadMoreComponent,
    CoursesDeleteDialogComponent,
    HighlightDirective,
    OrderByPipe,
    FilterByTitlePipe,
    CoursesComponent,
    DurationPipe,
    CoursesAddOrEditComponent,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    FilterByTitlePipe,
    DatePipe,
    DurationPipe
  ],
  entryComponents: [
    CoursesDeleteDialogComponent
  ]
})
export class CoursesModule { }
