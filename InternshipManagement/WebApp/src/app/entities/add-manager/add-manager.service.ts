import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddManagerModel } from './add-manager.model';

@Injectable()
export class AddManagerService {

  private postResourceUrl = 'https://localhost:44307/api/users/create-manager';

  constructor(private http: HttpClient) { }

  createManagerAccount(manager: AddManagerModel): Observable<AddManagerModel> {
    console.log("service");
    return this.http.post<AddManagerModel>(this.postResourceUrl, manager);
  }

}
