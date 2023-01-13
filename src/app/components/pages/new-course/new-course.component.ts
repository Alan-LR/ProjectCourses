import { CourseService } from './../../../services/course.service';
import { Course } from './../../../models-interface/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent {

  constructor(private courseService: CourseService){

  }


}
