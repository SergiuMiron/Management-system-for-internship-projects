import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeamModel} from './team.model';

@Injectable()
export class TeamService {

  private getResourceUrl = 'https://localhost:44390/api/teams';
  private postResourceUrl = 'https://localhost:44307/api/teams';
  private putResourceUrl = 'https://localhost:44307/api/teams/update-team';
  private deleteResourceUrl = 'https://localhost:44307/api/teams/delete-team';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TeamModel[]> {
    return this.http.get<TeamModel[]>(this.getResourceUrl);
  }

  create(project: TeamModel): Observable<TeamModel> {
    return this.http.post<TeamModel>(this.postResourceUrl, project);
  }

  update(project: TeamModel): Observable<TeamModel> {
    return this.http.put<TeamModel>(this.putResourceUrl, project);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.deleteResourceUrl}/${id}`);
  }

}
