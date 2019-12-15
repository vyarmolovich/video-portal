import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDeleteDialogComponent } from './courses-delete-dialog.component';

describe('CoursesDeleteDialogComponent', () => {
  let component: CoursesDeleteDialogComponent;
  let fixture: ComponentFixture<CoursesDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
