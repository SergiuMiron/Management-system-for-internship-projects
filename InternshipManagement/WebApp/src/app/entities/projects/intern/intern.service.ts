import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InternModel} from './intern.model';

@Injectable()
export class InternService {

  private getResourceUrl = 'https://localhost:44390/api/interns';
  private putResourceUrl = 'https://localhost:44307/api/interns/update-interns';

  constructor(private http: HttpClient) {}

  getAll(): Observable<InternModel[]> {
    return this.http.get<InternModel[]>(this.getResourceUrl);
  }

  getAllByProjectId(projectId: string): Observable<InternModel[]> {
    return this.http.get<InternModel[]>(`${this.getResourceUrl}/project/${projectId}`);
  }

  getAllByTeamId(teamId: string): Observable<InternModel[]> {
    return this.http.get<InternModel[]>(`${this.getResourceUrl}/team/${teamId}`);
  }

  updateInternsTeam(interns: InternModel[], teamId: string): Observable<any> {
    console.log("interns: ", interns)
    return this.http.put<any>(`${this.putResourceUrl}/team/${teamId}`, interns);
  }

}
