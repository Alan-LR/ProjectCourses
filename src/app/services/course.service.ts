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

  postCourses(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course)
  }

  updateCourse(id: Number, courseData: Course): Observable<Course> {
    const url = `${this.apiUrl}${id}`;
    return this.http.put<Course>(url, courseData);
  }

  // async updateMoment(id: Number, formData: FormData): Promise<Observable<FormData>>{
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<FormData>(url, formData);
  // }

  // createMoment(formData: FormData): Observable<FormData> {
  //   return this.http.post<FormData>(this.apiUrl, formData)
  // }

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
