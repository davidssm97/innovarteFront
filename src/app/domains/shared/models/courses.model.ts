import { EnrollmentDto } from "./enrollments.model";
import { ProfessorDto } from "./professor.model";

export interface CourseDto {
    courseId:        number;
    courseName:      string;
    credits:         number;
    professor:       ProfessorDto;
    enrollmentsList: EnrollmentDto[];
    descripcion: string; // nuevo campo
    imagen: string; // nuevo campo
}


