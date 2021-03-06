import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';
import { LoginComponent } from './auth/login/login.component';
import { CoursesAddOrEditComponent } from './courses/courses-add-or-edit/courses-add-or-edit.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

export const enum COURSES_PATH {
  login = 'login',
  courses = 'courses',
  courses_new = 'courses/new'
};

const appRoutes: Routes = [
  { path: COURSES_PATH.courses, component: CoursesComponent, data: { breadcrumbs: 'courses' } },
  { path: '',   redirectTo: COURSES_PATH.courses, pathMatch: 'full' },
  { path: COURSES_PATH.login, component: LoginComponent },
  { path: COURSES_PATH.courses_new, component: CoursesAddOrEditComponent, canActivate: [AuthGuard] },
  { path: COURSES_PATH.courses + '/:id', component: CoursesAddOrEditComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
