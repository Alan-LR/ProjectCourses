import { Response } from './../models-interface/response';
import { Course } from './../models-interface/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl: string = "http://localhost:8080/cursos/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public postCourses(course: any): Observable<Course>{
    return this.http.post<any>(this.apiUrl, course, this.httpOptions)
  }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl)
  }
}
