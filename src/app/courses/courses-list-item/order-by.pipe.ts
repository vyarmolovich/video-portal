import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform (records: Array<any>, arg?: any): any {      
    if (records == null) //since the async is still working
      return [];
    return records.sort (
      function (a, b) {
        if (a[arg] < b[arg]) { return -1; }
        else if (a[arg] > b[arg]) { return 1; }
        else { return 0; }
      });
    };
}
