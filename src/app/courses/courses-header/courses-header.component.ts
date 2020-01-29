import { Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { COURSES_PATH } from 'src/app/app-routing.module';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'vp-courses-header',
  templateUrl: './courses-header.component.html',
  styleUrls: ['./courses-header.component.css']
})
export class CoursesHeaderComponent implements OnInit, OnDestroy  {

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  subject$: Subject<string> = new Subject<string>();
  subscription: Subscription;

  faSearch = faSearch;
  faPlus = faPlus;

  search = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const term$ = this.subject$.pipe(
      filter((s: string) => s.length == 0 || s.length > 3),
      debounceTime(400)
    );

    this.subscription = term$.subscribe(
      () => {
        this.searchEvent.emit(this.search);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchCourses() {
    this.subject$.next(this.search);
  }

  addCourse() {
    this.router.navigate([COURSES_PATH.courses_new]);
  }
}
