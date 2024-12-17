import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno, Alumnos } from 'src/interfaces/alumnos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = `${environment.apiUrl}/alumnos`;

  constructor(private httpclient: HttpClient) {}

  getAlumnos(): Observable<Alumnos[]>{
    return this.httpclient.get<Alumnos[]>(this.apiUrl);
    }

    postAlumnos(newAlumno: Alumno): Observable<Alumno> {
      return this.httpclient.post<Alumno>(this.apiUrl, newAlumno);
    }

  getAlumno(id: number): Observable<Alumno> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpclient.get<Alumno>(url);
  }

  deleteAlumno(alumno: Alumno): Observable<void> {
    const url = `${this.apiUrl}/${alumno.id}`;
    return this.httpclient.delete<void>(url);
  }
}
