import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,CoursesComponent],
  template: `
  <h3>los cursos que esta tomando {{studentName}}</h3>
    <ul>
      @for (course of courses; track course.id) {
        <li (click)="fav(course.name)">{{course.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class CoursesComponent {

  @Input() studentName = '';

  @Output()addFavortieEvent =  new EventEmitter<string>();

  fav(courseName: string) {
      this.addFavortieEvent.emit(courseName);
  }

  courses = [
    {
      id:1,
      name: 'musica'
    },
    {
      id:2,
      name: 'dibujo a lapiz'
    },
    {
      id:3,
      name: 'pintura al oleo'
    }

  ]

}
