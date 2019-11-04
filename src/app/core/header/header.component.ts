import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';

@Component({
  selector: 'vp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: User = {id: 1, firstName: 'Vasya', lastName: 'Pupkin'};

  constructor() { }

  ngOnInit() {
  }

}
