import { ResponsePageable } from '../models-interface/ResponsePageable.model';
import { Aula } from './../models-interface/Aula';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

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

  // findLessons(): Observable<ResponsePageable>{
  //   return this.http.get<ResponsePageable>(this.apiUrl, this.httpOptions);
  // }

  findLessons(id: Number): Observable<ResponsePageable>{
    return this.http.get<ResponsePageable>(this.apiUrl + 'curso/' + id, this.httpOptions);
  }

  // public getLivesWithFlag(flag: string): Observable<ResponsePageable>{
  //   return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  // }
}
