import { FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from './../../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './../../services/course.service';
import { Course } from './../../models-interface/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent {

  btnText = 'Salvar';
  course!: Course;
  message: any = '';
  courseEdit: Course;


  constructor(private courseService: CourseService,
    private route: ActivatedRoute, //para pegar o ID que vem da URL
    private router: Router, // para redirecionar a página
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.courseService.getCourseId(id).subscribe(item => {
      this.course = item
    });


  }

  editHandler(courseData: Course) {
    //Bloco de código para alterar as informações do formulário com a info que veio do getCourseId
    const id = this.course.curso_id;
    const formData = new FormData();
    formData.append('nome', courseData.nome);
    formData.append('categoria', courseData.categoria);

    this.course.nome = courseData.nome;
    this.course.categoria = courseData.categoria;

    //chamando service para alterar no db
    this.courseService.updateCourse(id!, this.course).subscribe();
    this.message = this.messageService.add('Curso atualizado com sucesso!');


    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);


  }


}
