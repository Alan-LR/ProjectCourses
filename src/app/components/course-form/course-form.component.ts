import { Router } from '@angular/router';
import { MessageService } from './../../services/message.service';
import { Course } from './../../models-interface/course';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  @Output() onSubmit = new EventEmitter<Course>

  public courseForm: FormGroup;


  constructor(private courseService: CourseService,
    private fb : FormBuilder,
    private messageService: MessageService,
    private router: Router
    ){

  }

  ngOnInit(): void{
    this.courseForm = this.fb.group({
      nome: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  
  }

  createCourse(){
    this.courseService.postCourses(this.courseForm.value).subscribe(result =>{});
    this.messageService.add('Curso adicionado com sucesso!');
    this.router.navigate(['/'])
  }

}
