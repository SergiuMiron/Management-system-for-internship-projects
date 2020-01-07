import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TrainerModel} from './trainer.model';

@Injectable()
export class TrainerService {

  private getResourceUrl = 'https://localhost:44390/api/trainers';
  private putResourceUrl = 'https://localhost:44307/api/trainers/update-trainers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TrainerModel[]> {
    return this.http.get<TrainerModel[]>(this.getResourceUrl);
  }

  getAllByProjectId(projectId: string): Observable<TrainerModel[]> {
    return this.http.get<TrainerModel[]>(`${this.getResourceUrl}/${projectId}`);
  }

  updateTrainersProject(trainers: TrainerModel[], projectId: string): Observable<any> {
    return this.http.put<any>(`${this.putResourceUrl}/${projectId}`, trainers);
  }

}
