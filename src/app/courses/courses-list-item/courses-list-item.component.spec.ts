import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CoursesListItem } from './courses-list-item-model';


@Component({
  template: `
    <vp-courses-list-item
      [item]="item" (delete)="deleteCourseById($event)">
    </vp-courses-list-item>`
})
class TestHostComponent {
  item: CoursesListItem = {id: 11, title: 'Video course #11 Title', creationDate: '', duration: '', description: ''};
  deleteCourseById(event: number) {
    console.log('Deleting course by #id:' + event);
  }
}

describe('CoursesListItemComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, FaIconComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CoursesListItemComponent);
    const component = fixture.componentInstance;
    component.item = {
      id: 1,
      title: 'Vide course #1 Title',
      creationDate: '9 Nov, 2018',
      duration: '1h 28 min',
      description: 'Description of the Video course'
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

    component.item = { id: 1, title: '', creationDate: '', duration: '', description: '' };
    component.deleteCourse();
    expect(component.delete.hasError).toBe(false, 'could not delete an item');
  });

  it ('[Stand-Alone] should raise delete event when clicked', () => {
    const fixture = TestBed.createComponent(CoursesListItemComponent);
    const component = fixture.componentInstance;
    component.item = { id: 10, title: 'Video course #10 Title', creationDate: '', duration: '', description: '' };
    const spy = spyOn(component, 'deleteCourse');
    fixture.debugElement.query(By.css('.delete-course button')).triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it ('[Test host] should raise delete event when clicked', () => {

  });
});
