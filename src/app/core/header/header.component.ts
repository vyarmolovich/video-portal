import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;

  public user: User = {id: 1, firstName: 'Vasya', lastName: 'Pupkin'};

  constructor() { }

  ngOnInit() {
  }

}
