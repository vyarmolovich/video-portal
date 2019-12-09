import { Directive, ElementRef, Input } from '@angular/core';
import { CoursesListItem } from './courses-list-item-model';

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
    freshDate.setDate(freshDate.getDate() - 14);

    if (this.item.creationDate < currentDate && (this.item.creationDate >= freshDate)) {
      (<HTMLElement>this.element.nativeElement).classList.add('fresh');
    } else if (this.item.creationDate > currentDate) {
      (<HTMLElement>this.element.nativeElement).classList.add('upcoming');
    }
  }
}
