import { Injectable } from '@angular/core';
import { EventsModule } from '../events.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventsEndpoint } from '../models/enum/events-endpoint.enum';
import { EventsModel } from '../models/class/events-model';

@Injectable({
  providedIn: EventsModule
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get(`${environment.API_URL}/${EventsEndpoint.EVENTS}`)
  }


  getEvent(id: string) {
    return this.http.get(`${environment.API_URL}/${EventsEndpoint.EVENTS}/${id}`)
  }

  createEvent(events: EventsModel) {
    return this.http.post(`${environment.API_URL}/${EventsEndpoint.EVENTS}`, events)
  }

  uptadeEvent(events: EventsModel) {
    return this.http.put(`${environment.API_URL}/${EventsEndpoint.EVENTS}`, events)
  }

  deleteEvent(id: string) {
    return this.http.delete(`${environment.API_URL}/${EventsEndpoint.EVENTS}/${id}`)
  }
}
