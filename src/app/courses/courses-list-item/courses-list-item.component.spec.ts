import { async, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CoursesListItem } from './courses-list-item-model';

describe('CoursesListItemComponent', () => {

  @Component({
    template: `
      <vp-courses-list-item
        [item]="courcesItem" (delete)="deleteCourseById($event)">
      </vp-courses-list-item>`
  })
  class TestHostComponent {
    courcesItem: CoursesListItem = {id: 11, title: 'Video course #11 Title', creationDate: new Date(), duration: '', description: '', topRated: false};
    deleteCourseById(event: number) {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestHostComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CoursesListItemComponent);
    const component = fixture.componentInstance;
    component.item = {
      id: 1,
      title: 'Vide course #1 Title',
      creationDate: new Date ('2018-11-09'),
      duration: '1h 28 min',
      description: 'Description of the Video course',
      topRated: false
    };

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('[Test as a class] should be initialized and call deleteCourse method', () => {
    const component = new CoursesListItemComponent();
    expect(component.item).toBeUndefined('is not empty at start');
    expect(component.faClock).toBe(faClock, 'is not initialized');
    expect(component.faCalendarAlt).toBe(faCalendarAlt, 'is not initialized');
    expect(component.faPen).toBe(faPen, 'is not initialized');
    expect(component.faTrash).toBe(faTrash, 'is not initialized');

    component.item = { id: 1, title: '', creationDate: new Date(), duration: '', description: '', topRated: false };
    component.deleteCourse();
    expect(component.delete.hasError).toBe(false, 'could not delete an item');
  });

  it ('[Stand-Alone] should raise delete event when clicked', () => {
    const fixture = TestBed.createComponent(CoursesListItemComponent);
    const component = fixture.componentInstance;
    component.item = { id: 10, title: 'Video course #10 Title', creationDate: new Date(), duration: '', description: '', topRated: false };
    const spy = spyOn(component, 'deleteCourse');
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.delete-course button')).triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  });

  it ('[Test integration with parent] should raise delete event when clicked', () => {
    const fixture  = TestBed.createComponent(TestHostComponent);
    const testHost = fixture.componentInstance;
    const deleteButton = fixture.nativeElement.querySelector('.delete-course button');
    const spy = spyOn(testHost, 'deleteCourseById');
    fixture.detectChanges(); 

    deleteButton.click();

    expect(spy).toHaveBeenCalled();
  });
});
