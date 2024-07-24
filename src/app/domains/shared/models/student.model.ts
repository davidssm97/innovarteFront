import { EnrollmentDto } from "./enrollments.model";

export interface Student {
    studentId:       number;
    name:            string;
    birthDate:       Date;
    email:           string;
    enrollmentsList?: EnrollmentDto[];
    paymentList?:     PaymentItem[];
}

