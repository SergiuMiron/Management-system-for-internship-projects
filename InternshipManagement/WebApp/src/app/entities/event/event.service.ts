import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventModel} from './event.model';

@Injectable()
export class EventService {

  private getResourceUrl = 'https://localhost:44390/api/events';
  private postResourceUrl = 'https://localhost:44307/api/events';
  private putResourceUrl = 'https://localhost:44307/api/events/update-event';
  private deleteResourceUrl = 'https://localhost:44307/api/events/delete-event';

  constructor(private http: HttpClient) {}

  getAll(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.getResourceUrl);
  }

  create(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.postResourceUrl, event);
  }

  update(event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(this.putResourceUrl, event);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.deleteResourceUrl}/${id}`);
  }
}
