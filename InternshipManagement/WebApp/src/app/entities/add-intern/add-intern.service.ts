import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddInternModel } from './add-intern.model';

@Injectable()
export class AddInternService {

  private postResourceUrl = 'https://localhost:44307/api/users/create-intern';

  constructor(private http: HttpClient) { }

  createInternAccount(intern: AddInternModel): Observable<AddInternModel> {
    return this.http.post<AddInternModel>(this.postResourceUrl, intern);
  }

}
