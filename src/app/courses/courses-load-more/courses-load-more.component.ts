import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vp-courses-load-more',
  templateUrl: './courses-load-more.component.html',
  styleUrls: ['./courses-load-more.component.css']
})
export class CoursesLoadMoreComponent {

  @Output()
  loadMoreEvent: EventEmitter<any> = new EventEmitter();
  

  loadMore() {
    console.log('Try to load more courses...');
    this.loadMoreEvent.emit();
  }
}
