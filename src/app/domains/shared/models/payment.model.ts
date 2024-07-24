import { Student } from "./student.model";

export interface PaymentDto {
    paymentId:   number;
    amount:      number;
    paymentDate: Date;
    paymentTipe: PaymentDto;
    student1:    Student;
}

