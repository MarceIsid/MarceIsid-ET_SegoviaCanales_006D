import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import   { Observable } from 'rxjs';
import {Profesor, Profesores} from 'src/interfaces/profesor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  GetAllProfesores():Observable<Profesores[]>{
    return this.httpclient.get<Profesores[]>(`${environment.apiUrl}/profesor`);
  }

  GetProfesorByCorreo(profesor:any):Observable<Profesores>{
    return this.httpclient.get<Profesores>(`${environment.apiUrl}/profesor/?correo=${profesor}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('correo')!=null;
  }

  PostProfesor(nuevoProfesor:Profesor): Observable<Profesor>{
    return  this.httpclient.post<Profesor>(`${environment.apiUrl}/profesor`, nuevoProfesor);
  }

  GetProfesorById(id:number): Observable<Profesor>{
    return this.httpclient.get<Profesor>(`${environment.apiUrl}/profesor/?id=${id}`);
  }
}
