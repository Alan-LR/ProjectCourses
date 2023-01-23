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

  httpCors = {
    headers: new HttpHeaders({})
  };


  constructor(private http: HttpClient) { }

  postCourses(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course)
  }

  updateCourse(id: Number, courseData: Course): Observable<Course> {
    const url = `${this.apiUrl}${id}`;
    return this.http.put<Course>(url, courseData);
  }

  updateCourseLesson(course: Course): Observable<any> {
    const url = `${this.apiUrl}/alterando/` 
    return this.http.put<any>(url, course, this.httpOptions);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl)
  }

  getCourseId(id: Number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}${id}`);
  }

  deleteCourse(id: Number) {
    return this.http.delete(`${this.apiUrl}${id}`)
  }

}
