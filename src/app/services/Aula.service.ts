import { Aula } from '../models-interface/Aula';

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

  createLesson(data: Aula): Observable<Aula>{
    return this.http.post<Aula>(this.apiUrl, data, this.httpOptions);
  }
}
