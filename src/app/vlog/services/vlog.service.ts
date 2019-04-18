import { Injectable } from '@angular/core';
import { VlogModule } from '../vlog.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VlogEndpoint } from '../models/enum/vlog-endpoint.enum';
import { VlogModel } from '../models/class/vlog-model';

@Injectable({
  providedIn: VlogModule
})
export class VlogService {

  constructor(private http: HttpClient) { }

  getAllVlog() {
    return this.http.get(`${environment.API_URL}/${VlogEndpoint.VLOG}`)
  }

  getVlog(id: string) {
    return this.http.get(`${environment.API_URL}/${VlogEndpoint.VLOG}/${id}`)
  }

  createVlog(vlog: VlogModel) {
    return this.http.post(`${environment.API_URL}/${VlogEndpoint.VLOG}`, vlog)
  }

  uptadeVlog(vlog: VlogModel) {
    return this.http.put(`${environment.API_URL}/${VlogEndpoint.VLOG}`, vlog)
  }

  deleteVlog(id: string) {
    return this.http.delete(`${environment.API_URL}/${VlogEndpoint.VLOG}/${id}`)
  }

}
