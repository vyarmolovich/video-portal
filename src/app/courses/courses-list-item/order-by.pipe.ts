import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(records: Array<any>, arg?: any): any {       
    return records.sort(
      function(a, b){
        if (a[arg] < b[arg]) { return -1; }
        else if (a[arg] > b[arg]) { return 1; }
        else { return 0; }
      });
    };
}
