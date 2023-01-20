import { Router } from '@angular/router';
import { MessageService } from './../../../services/message.service';
import { CourseService } from './../../../services/course.service';
import { Course } from './../../../models-interface/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent {

  btnText = 'Adicionar'

  courseData: Course

  constructor(private courseService: CourseService,
    private messageService: MessageService,
    private router: Router) {

  }

  elementoPaiRecebeEventoFilho(course: Course) {
    //enviar para o service
    this.courseService.postCourses(course).subscribe();

    //exibir msg de sucesso
    this.messageService.add('Curso adicionado com sucesso!')

    //redirecionar o usuário após concluir o formulário para outra página
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);

  }
}



