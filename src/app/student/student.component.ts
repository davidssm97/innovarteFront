import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, CoursesComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
    studentName = "david";
    isLoggedIn = false;
    favCourse='';

    getFavorite(courseName : string){
      this.favCourse = courseName;
    }

    greet(){
      alert('Hola!!!');
    }
}
