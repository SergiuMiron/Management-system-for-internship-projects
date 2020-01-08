import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InternModel} from './intern.model';

@Injectable()
export class InternService {

  private getResourceUrl = 'https://localhost:44390/api/interns';

  constructor(private http: HttpClient) {}

  getAll(): Observable<InternModel[]> {
    return this.http.get<InternModel[]>(this.getResourceUrl);
  }

  getAllByProjectId(projectId: string): Observable<InternModel[]> {
    return this.http.get<InternModel[]>(`${this.getResourceUrl}/${projectId}`);
  }

}
