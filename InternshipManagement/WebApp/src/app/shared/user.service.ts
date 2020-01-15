import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainerModel } from '../entities/projects/trainer.model';
import { ManagerModel } from '../entities/projects/manager/manager.model';
import { InternModel } from '../entities/projects/intern/intern.model';

@Injectable()
export class UserService {

  private getResourceUrl = 'https://localhost:44390/api/users';

  constructor(private http: HttpClient) { }

  getManagerById(managerId: string): Observable<ManagerModel[]> {
    return this.http.get<ManagerModel[]>(`${this.getResourceUrl}/manager/${managerId}`);
  }

  getTrainerById(trainerId: string): Observable<TrainerModel[]> {
    return this.http.get<TrainerModel[]>(`${this.getResourceUrl}/trainer/${trainerId}`);
  }

  getInternById(internId: string): Observable<InternModel[]> {
    return this.http.get<InternModel[]>(`${this.getResourceUrl}/intern/${internId}`);
  }

}