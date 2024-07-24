import { CourseDto } from "./courses.model";
import { Student } from "./student.model";

export interface EnrollmentDto {
    enrollmentID:   number;
    enrollmentDate: Date;
    courses:        CourseDto;
    student:        Student;
}

