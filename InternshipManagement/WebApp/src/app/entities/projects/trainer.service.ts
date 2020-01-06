import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrainerModel} from './trainer.model';

@Injectable()
export class TrainerService {

  private getResourceUrl = 'https://localhost:44390/api/trainers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TrainerModel[]> {
    return this.http.get<TrainerModel[]>(this.getResourceUrl);
  }

}
