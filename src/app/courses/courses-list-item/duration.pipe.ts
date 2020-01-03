import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 0) {
      return value < 60 ? value + ' min' : Math.trunc(value / 60) + ' h ' + (value % 60) + ' min';
    } else {
      return '';
    }
  }
}
