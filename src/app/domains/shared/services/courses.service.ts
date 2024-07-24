import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { CourseDto } from '../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/course'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<CourseDto> {
    return this.http.get<CourseDto>(`${this.baseUrl}/find/${id}`);
  }

  findThreeCourses(): Observable<CourseDto[]> {
    const ids = [7, 9, 10];
    const requests = ids.map(id => this.findById(id));
    return forkJoin(requests);
  }

  findAll(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(`${this.baseUrl}/findAll`);
  }
}
