import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { MessageService } from './../../services/message.service';
import { CourseService } from './../../services/course.service';
import { Course } from './../../models-interface/course';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  course?: Course;

  displayedColumns: string[] = ['nome', 'categoria'];

  constructor(private activatedRoute: ActivatedRoute, 
    private courseService: CourseService,
    private messageService: MessageService,
    private router: Router,
    public dialog: MatDialog,
    ){

  }

  ngOnInit(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.courseService.getCourseId(id).subscribe((item) => {
      this.course = item
    });
  }

  deleteCourse(id: Number){
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


}
