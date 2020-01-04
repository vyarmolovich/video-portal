import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'vp-courses-add-or-edit',
  templateUrl: './courses-add-or-edit.component.html',
  styleUrls: ['./courses-add-or-edit.component.css']
})
export class CoursesAddOrEditComponent implements OnInit {

  item: CoursesListItem = {
      id: null,
      title: null,
      creationDate: null,
      duration: null,
      description: null,
      topRated: null,
      authors: []
  };

  faCalendar = faCalendar;
  
  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params.forEach(
        (params: Params) => {
          if (params['id'] !== undefined) {
            this.item = this.coursesService.getItemById(+params['id']);
          } 
        }
      );
  }

  save() {
    this.coursesService.updateItem(this.item);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }

  setCreationDate(event) {
    this.item.creationDate = event;
  }
}
