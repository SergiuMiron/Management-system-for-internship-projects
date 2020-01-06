import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from './project.model';

@Injectable()
export class ProjectService {

  private getResourceUrl = 'https://localhost:44390/api/projects';
  private postResourceUrl = 'https://localhost:44307/api/projects';
  private putResourceUrl = 'https://localhost:44307/api/projects/update-project';
  private deleteResourceUrl = 'https://localhost:44307/api/projects/delete-project';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.getResourceUrl);
  }

  create(project: ProjectModel): Observable<ProjectModel> {
    return this.http.post<ProjectModel>(this.postResourceUrl, project);
  }

  update(project: ProjectModel): Observable<ProjectModel> {
    return this.http.put<ProjectModel>(this.putResourceUrl, project);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.deleteResourceUrl}/${id}`);
  }

}
