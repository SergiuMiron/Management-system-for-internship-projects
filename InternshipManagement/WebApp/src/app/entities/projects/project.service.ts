import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from './project.model';

@Injectable()
export class ProjectService {

  private resourceUrl = 'api/projects';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.resourceUrl);
  }

  create(project: ProjectModel): Observable<ProjectModel> {
    return this.http.post<ProjectModel>(this.resourceUrl, project);
  }

}
