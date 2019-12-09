import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    return value < 60 ? value + ' min' : Math.trunc(value / 60) + ' h ' + (value % 60) + ' min';
  }
}
