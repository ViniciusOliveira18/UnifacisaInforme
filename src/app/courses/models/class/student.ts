import { CoursesModel } from './courses-model';

export class Student{
    course?: CoursesModel;
    id?: string;
    image?:string;
    name?:string;
    period?: number;
}