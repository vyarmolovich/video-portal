import { Directive, ElementRef, Input } from '@angular/core';
import { CoursesListItem } from './courses-list-item-model';

const HOW_LONG_ITS_FRESH = 14;

@Directive({
  selector: '[vpHighlight]'
})
export class HighlightDirective {

  @Input('vpHighlight') item: CoursesListItem;

  constructor(private  element: ElementRef) { 
  }

  ngOnInit() {
    const currentDate: Date = new Date();
    const freshDate: Date = new Date();
    freshDate.setDate(freshDate.getDate() - HOW_LONG_ITS_FRESH);

    if (this.item.creationDate < currentDate && (this.item.creationDate >= freshDate)) {
      (<HTMLElement>this.element.nativeElement).classList.add('fresh');
    } else if (this.item.creationDate > currentDate) {
      (<HTMLElement>this.element.nativeElement).classList.add('upcoming');
    }
  }
}
