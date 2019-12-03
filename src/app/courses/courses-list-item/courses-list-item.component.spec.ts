import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, FaIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 1,
      title: 'Vide course #1 Title',
      creationDate: '9 Nov, 2018',
      duration: '1h 28 min',
      description: 'Description of the Video course #1 Learn about where you can find course descriptions, what information they include'
        + ', how they work, and details about various components of a course description. Course descriptions report information about a'
        + ' university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course'
        + ' schedules that contain descriptions for all courses offered during a particular semester'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test as a class', () => {
    const comp = new CoursesListItemComponent();
    expect(comp.item).toBeUndefined('is not empty at start');
    expect(comp.faClock).toBe(faClock, 'is not initialized');
    expect(comp.faCalendarAlt).toBe(faCalendarAlt, 'is not initialized');
    expect(comp.faPen).toBe(faPen, 'is not initialized');
    expect(comp.faTrash).toBe(faTrash, 'is not initialized');

    comp.item = { id: 1, title: '', creationDate: '', duration: '', description: '' };
    comp.deleteCourse();
    expect(comp.delete.hasError).toBe(false, 'could not delete an item');
  });
});
