import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeModule } from '../home.module';

@Injectable({
  providedIn: HomeModule
})
export class HomeService {

  constructor(private http: HttpClient) { }

}
