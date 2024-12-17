import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  // Asegúrate de que la URL esté configurada correctamente
import { Asignaturas, Asignatura } from 'src/interfaces/Asignaturas';  // Asegúrate de que las interfaces estén definidas correctamente

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpclient: HttpClient) { }

  // Obtener todas las asignaturas (debería devolver un arreglo de Asignaturas)
  getAsignaturas(): Observable<Asignaturas[]> {
    return this.httpclient.get<Asignaturas[]>(`${environment.apiUrl}/asignaturas`);
  }

  // Crear una nueva asignatura
  postAsignatura(newAsignatura: Asignatura): Observable<Asignatura> {
    return this.httpclient.post<Asignatura>(`${environment.apiUrl}/asignaturas`, newAsignatura);
  }

  // Obtener una asignatura por su ID
  getAsignaturaID(id: number): Observable<Asignaturas> {
    return this.httpclient.get<Asignaturas>(`${environment.apiUrl}/asignaturas/${id}`);
  }

  // Actualizar una asignatura
  putAsignaturas(asignatura: any): Observable<Asignaturas> {
    return this.httpclient.put<Asignaturas>(`${environment.apiUrl}/asignaturas/${asignatura.id}`, asignatura);
  }

  EliminarAsignatura(asignatura:any): Observable<Asignaturas>{
    return this.httpclient.delete<Asignaturas>(`${environment.apiUrl}/asignaturas/${asignatura.id}`);
  }

  BuscarAsignaturaId(id: number): Observable<Asignaturas> {
    return this.getAsignaturaID(id);
  }
}
