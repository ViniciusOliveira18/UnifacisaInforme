import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/class/user.model.';
import { SharedEndpoint } from '../models/enum/shared-endpoint.enum';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  user: User;
  constructor(private http: HttpClient) { }

  authorize() {
    this.user = new User();
    this.user.username = "viniciusoliveira1808@gmail.com";
    this.user.password = "viniciusoliveira1808@gmail.com"
    this.http.post(`${environment.API_URL}/${SharedEndpoint.AUTHENTICATE}`, this.user).subscribe(
      token => console.log(token));

  }
}
