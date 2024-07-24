import { CourseDto } from "./courses.model";

export interface ProfessorDto {
    professorId: number;
    name:        string;
    hireDate:    Date;
    email:       string;
    coursesList: CourseDto[];
}

