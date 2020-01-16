import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vp-courses-add-or-edit',
  templateUrl: './courses-add-or-edit.component.html',
  styleUrls: ['./courses-add-or-edit.component.css']
})
export class CoursesAddOrEditComponent implements OnInit {

  public item$: Observable<CoursesListItem>;

  itemId: number;

  faCalendar = faCalendar;
  
  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params.forEach(
        (params: Params) => {
          if (params['id'] !== undefined) {
            this.itemId = params['id'];
            this.item$ = this.coursesService.getItemById(this.itemId);
          } 
        }
      );
  }

  save() {
    this.coursesService.updateItemById(this.itemId);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
