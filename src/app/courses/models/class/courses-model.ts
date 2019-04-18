import { Student } from './student';

export class CoursesModel{
    description?: string;
    id?: string;
    name?: string;
    people?: Array<Student>;
}