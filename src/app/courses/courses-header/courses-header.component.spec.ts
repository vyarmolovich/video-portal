import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHeaderComponent } from './courses-header.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CoursesHeaderComponent', () => {
  let component: CoursesHeaderComponent;
  let fixture: ComponentFixture<CoursesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CoursesHeaderComponent, FaIconComponent ]
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

  it ('should search when clicked', () => {
    const spy = spyOn(component, 'searchCourses');
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.search-course .btn')).triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });

  it ('should log message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.searchCourses();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
