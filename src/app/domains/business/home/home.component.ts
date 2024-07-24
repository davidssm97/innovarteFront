import { Component, Inject, OnInit } from '@angular/core';
import { CourseDto } from '../../shared/models/courses.model';
import { CourseService } from '../../shared/services/courses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  courses: CourseDto[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.findThreeCourses().subscribe(
      (data: CourseDto[]) => {
        this.courses = data;
      },
      (error) => {
        console.error('Error fetching course data', error);
      }
    );
  }
}


