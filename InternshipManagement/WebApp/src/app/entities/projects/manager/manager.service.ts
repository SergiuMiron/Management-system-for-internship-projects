import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ManagerModel} from './manager.model';

@Injectable()
export class ManagerService {

  private getResourceUrl = 'https://localhost:44390/api/managers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ManagerModel[]> {
    return this.http.get<ManagerModel[]>(this.getResourceUrl);
  }

  getByProjectId(projectId: string): Observable<ManagerModel> {
    return this.http.get<ManagerModel>(`${this.getResourceUrl}/${projectId}`);
  }

}
