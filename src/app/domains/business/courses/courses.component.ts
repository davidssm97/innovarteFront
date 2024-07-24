import { Component, inject } from '@angular/core';
import { CourseService } from '../../shared/services/courses.service';
import { CourseDto } from '../../shared/models/courses.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export default class CoursesComponent {

  courseDto: CourseDto[] = [];
  
  private courseService = inject(CourseService);
 
  ngOnInit() {
    this.getStudentDTOs();
  }
 
  getStudentDTOs() {
    this.courseService.findAll().subscribe(courseDto => {
      this.courseDto = courseDto;
    });
  }
 
}
