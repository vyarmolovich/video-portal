import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initialized properly', () => {
    expect(component.faUser).toBe(faUser, 'is not initialized');
    expect(component.faSignOutAlt).toBe(faSignOutAlt, 'is not initialized');
    expect(component.user).toBeDefined('is not defined');
  });
});
