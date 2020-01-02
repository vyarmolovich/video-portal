import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAddOrEditComponent } from './courses-add-or-edit.component';

describe('CoursesAddOrEditComponent', () => {
  let component: CoursesAddOrEditComponent;
  let fixture: ComponentFixture<CoursesAddOrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAddOrEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
