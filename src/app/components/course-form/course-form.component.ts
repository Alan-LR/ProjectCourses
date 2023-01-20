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
  @Input() btnText!: string
  @Input() courseData: Course | null = null;

  courseForm!: FormGroup;


  constructor(private courseService: CourseService,
    private fb : FormBuilder,
    private messageService: MessageService,
    private router: Router
    ){

  }

  ngOnInit(): void{
    //está assim para funcionar o edit recebendo o courseData
    this.courseForm = this.fb.group({
      id: new FormControl (this.courseData ? this.courseData.curso_id: ''),
      nome: new FormControl (this.courseData ? this.courseData.nome: ''),
      categoria: new FormControl (this.courseData ? this.courseData.categoria: ''),
    });


    // this.momentForm = new FormGroup({
    //   id: new FormControl(this.momentData ? this.momentData.id : ''),
    //   title: new FormControl(this.momentData ? this.momentData.title : '', Validators.required),
    //   description: new FormControl(this.momentData ? this.momentData.description : '', Validators.required),
    //   image: new FormControl(''),
    // });
  }

  submit(){
    console.log(this.courseForm.value)
    this.onSubmit.emit(this.courseForm.value)
  }

}
