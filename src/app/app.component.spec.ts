import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { LogoComponent } from './core/logo/logo.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { CoursesHeaderComponent } from './courses/courses-header/courses-header.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses/courses-list-item/courses-list-item.component';
import { CoursesLoadMoreComponent } from './courses/courses-load-more/courses-load-more.component';
import { FooterComponent } from './core/footer/footer.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        BreadcrumbsComponent,
        CoursesHeaderComponent,
        CoursesListComponent,
        CoursesListItemComponent,
        CoursesLoadMoreComponent,
        FooterComponent,
        FaIconComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'video-portal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('video-portal');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('video-portal app is running!');
  // });
});
