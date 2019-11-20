import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vp-courses-load-more',
  templateUrl: './courses-load-more.component.html',
  styleUrls: ['./courses-load-more.component.css']
})
export class CoursesLoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadMore() {
    console.log('Try to load more courses...');
  }
}
