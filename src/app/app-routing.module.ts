import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CourseComponent } from './components/course/course.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewCourseComponent } from './components/pages/new-course/new-course.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'course/new', component: NewCourseComponent},
  {path: 'course/:id', component: CourseComponent},
  {path: 'course/edit/:id', component: EditCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
