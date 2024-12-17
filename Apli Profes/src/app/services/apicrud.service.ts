import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesores, Profesor } from 'src/interfaces/profesor';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {


  constructor(private httpclient:HttpClient) { }

  getProfesores(): Observable<Profesores[]>{
    return this.httpclient.get<Profesor[]>(`${environment.apiUrl}/profesor`);
    }

  postProfesores(newProfesor: Profesor): Observable<Profesor>{
    return this.httpclient.post<Profesor>(`${environment.apiUrl}/profesor`, newProfesor);
  }

  getProfesoresId(id:number):Observable<Profesores>{
    return this.httpclient.get<Profesor>(`${environment.apiUrl}/profesor/?id=${id}`);
  }

  putProfesor(profesor: Profesor): Observable<Profesor> {
    return this.httpclient.put<Profesor>(`${environment.apiUrl}/profesor/${profesor.id}`, profesor);
  }

  deleteProfesor(Profesores:any):Observable<Profesores>{
    return this.httpclient.delete<Profesor>(`${environment.apiUrl}/profesor/${Profesores.id}`);
  }
}
