import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHeaderComponent } from './courses-header.component';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { FormsModule } from '@angular/forms';

describe('CoursesHeaderComponent', () => {
  let component: CoursesHeaderComponent;
  let fixture: ComponentFixture<CoursesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesHeaderComponent, FaIconComponent, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
