import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from './project.model';

@Injectable()
export class ProjectService {

  private getResourceUrl = 'https://localhost:44319/api/projects';
  private postResourceUrl = 'http://localhost:57465/api/projects';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.getResourceUrl);
  }

  create(project: ProjectModel): Observable<ProjectModel> {
    return this.http.post<ProjectModel>(this.postResourceUrl, project);
  }

}
