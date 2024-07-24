import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model'; // Asegúrate de tener una interfaz para el DTO

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/api/student'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) {}

  findById(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/find/${studentId}`);
  }

  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/findAll`);
  }
}
