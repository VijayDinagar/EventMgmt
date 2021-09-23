import { Injectable } from '@angular/core';
import { URL_FOR_EVENT_MGMT } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


export interface IEventDetails {
  event_name: string,
  event_organizer: string,
  event_place: string,
  event_date: number,
  event_duration: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private eventReq = new Subject<IEventDetails[]>();
  eventReq$ = this.eventReq.asObservable();
  constructor(private httpService: HttpClient) { }

  getEvents() {
    return this.eventReq$;
  }

  getAllEvents() {
    return this.httpService.get<IEventDetails[]>(URL_FOR_EVENT_MGMT).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  getEventById(id: string) {
    return this.httpService.get<IEventDetails>(`${URL_FOR_EVENT_MGMT}/${id}`);
  }

  createEvent(body: IEventDetails) {
    return this.httpService.post(URL_FOR_EVENT_MGMT, body);
  }

  updateEvent(id: string, body: IEventDetails) {
    return this.httpService.put(`${URL_FOR_EVENT_MGMT}/${id}`, body);
  }

  deleteEvent(id: string) {
    return this.httpService.delete(`${URL_FOR_EVENT_MGMT}/${id}`);
  }
}
