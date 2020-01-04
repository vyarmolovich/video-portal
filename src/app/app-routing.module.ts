import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses/courses.component';
import { LoginComponent } from './auth/login/login.component';
import { CoursesAddOrEditComponent } from './courses/courses-add-or-edit/courses-add-or-edit.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesComponent, data: { breadcrumbs: 'courses' } },
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses/new', component: CoursesAddOrEditComponent },
  { path: 'courses/:id', component: CoursesAddOrEditComponent, data: { breadcrumbs: 'courses' } },
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
