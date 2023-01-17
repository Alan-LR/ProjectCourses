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

  allCourses: Course[] = [] //USADO PARA BUSCAR COM ANGULAR
  courses: Course[] = []
  searchTerm: string = '';

  displayedColumns: string[] = ['nome', 'categoria'];

  constructor(private courseService: CourseService){

  }

  ngOnInit(): void{
    return this.buscarCursos()
  }

  buscarCursos(){
    this.courseService.getCourses().subscribe((items) => {
      const data = items
     
      this.allCourses = data //PRECISAMOS PARA A BUSCA COM ANGULAR
      this.courses = data
    });

  }

  //FAZEMOS A BUSCA SOMENTE NO FRONT COM ESSE MÉTODO
  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value.toLowerCase()

    this.courses = this.allCourses.filter((course) => {
      return course.nome.toLowerCase().includes(value)
    });
  }

  testeId(id: number){
    console.log('esse é o id: ' + id)
  }

}
