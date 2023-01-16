import { Response } from './../../../models-interface/response';
import { Course } from './../../../models-interface/course';
import { CourseService } from './../../../services/course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listCourses: Course[] = []

  constructor(private courseService: CourseService){

  }

  ngOnInit(): void{
    this.courseService.getCourses().subscribe((items) => (this.listCourses = items));
    
  }

}
