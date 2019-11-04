import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item/courses-list-item-model';

@Component({
  selector: 'vp-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[] = [
    {
      id: 1,
      title: 'Vide course #1',
      creationDate: '20-09-2019',
      duration: 25,
      description: 'Description of the Video course #1'
    },
    {
      id: 1,
      title: 'Vide course #2',
      creationDate: '22-09-2019',
      duration: 15,
      description: 'Description of the Video course #2'
    },
    {
      id: 1,
      title: 'Vide course #3',
      creationDate: '25-09-2019',
      duration: 45,
      description: 'Description of the Video course #3'
    }   
  ]

  constructor() { }

  ngOnInit() {
  }

}
