import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoursesEndnpoit } from '../models/enum/courses-endpoint.enum';
import { CoursesModule } from '../courses.module';
import { CoursesModel } from '../models/class/courses-model';

@Injectable({
  providedIn: CoursesModule
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get(`${environment.API_URL}/${CoursesEndnpoit.COURSES}`)
  }


  getCourse(id: string) {
    return this.http.get(`${environment.API_URL}/${CoursesEndnpoit.COURSES}/${id}`)
  }


  createCourse(courses: CoursesModel) {
    return this.http.post(`${environment.API_URL}/${CoursesEndnpoit.COURSES}`, courses)
  }


  updateCourse(courses: CoursesModel) {
    return this.http.put(`${environment.API_URL}/${CoursesEndnpoit.COURSES}`, courses)
  }


  deleteCourse(id: string) {
    return this.http.delete(`${environment.API_URL}/${CoursesEndnpoit.COURSES}/${id}`)

  }





}
