import { AulaService } from './../../services/Aula.service';
import { Aula } from '../../models-interface/Aula';

import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { MessageService } from './../../services/message.service';
import { CourseService } from './../../services/course.service';
import { Course } from './../../models-interface/course';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  //course?: Course;
  //lessonForm!: FormGroup;

  course = new Course();
  aula = new Aula();
  aulasVideo: Aula[];

  constructor(private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private messageService: MessageService,
    private router: Router,
    public dialog: MatDialog,
    public sanitizer: DomSanitizer,
    private aulaService: AulaService,

  ) {

  }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.courseService.getCourseId(id).subscribe((item) => {
      this.course = item;
    });
    this.aulaService.findLessons(id).subscribe((item) => {
      this.aulasVideo = item.content
      console.log(this.aulasVideo)
      this.aulasVideo.forEach(aula => {
        aula.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(aula.aulaLink);
      });
    })


  
  }

  deleteCourse(id: Number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) { //se for verdadeiro
        //deletando
        this.courseService.deleteCourse(id).subscribe(
          () => {
            this.messageService.add('Excluído com sucesso!')
            this.router.navigate(['/']);
          })
      }
    });
  }

  teste() {
    if (this.course.aulas === undefined) {
      this.course.aulas = new Array<Aula>();
    }
    this.course.aulas.push(this.aula);
    console.log(this.course)
  }

  saveCourse() {
    if (this.course.aulas === undefined) {
      this.course.aulas = new Array<Aula>();
    }

    this.course.aulas.push(this.aula);
    this.aula = new Aula();
    this.courseService.updateCourseLesson(this.course).subscribe(data => {
      console.info("curso atualizado!")
    })
    this.messageService.add("Aula adicionada com sucesso!")
    window.location.reload();
  }


}





