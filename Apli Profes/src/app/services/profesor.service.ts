import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from 'src/interfaces/profesor';

@Injectable({
  providedIn: 'root' 
})
export class ProfesorService {
  private apiUrl = `${environment.apiUrl}/profesor`; // Endpoint base

  constructor(private http: HttpClient) {}

  getProfesorById(id: number): Observable<Profesor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Profesor>(url); 
  }

  updateProfesor(id: number, profesor: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, profesor);
  }

  deleteProfesor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
