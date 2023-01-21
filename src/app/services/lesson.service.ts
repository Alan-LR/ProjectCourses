import { Lesson } from './../models-interface/lesson';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  apiUrl: string = "http://localhost:8080/aulas/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  createLesson(data: Lesson): Observable<Lesson>{
    return this.http.post<Lesson>(this.apiUrl, data, this.httpOptions);
  }
}
