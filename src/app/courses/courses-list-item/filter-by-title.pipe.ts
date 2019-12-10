import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItem } from './courses-list-item-model';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(courses: CoursesListItem[], arg: string): CoursesListItem[] {
    arg = arg ? arg.toLocaleLowerCase() : null;
    return arg ? courses.filter(
      (course: CoursesListItem) =>
        course.title.toLocaleLowerCase().indexOf(arg) !== -1) : courses;
  }
}
