import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginComponent } from './auth/login/login.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesAddOrEditComponent } from './courses/courses-add-or-edit/courses-add-or-edit.component';

const appRoutes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses/new', component: CoursesAddOrEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
