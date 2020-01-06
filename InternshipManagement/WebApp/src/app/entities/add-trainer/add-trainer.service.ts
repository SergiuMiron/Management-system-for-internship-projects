import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddTrainerModel } from './add-trainer.model';

@Injectable()
export class AddTrainerService {

  private postResourceUrl = 'https://localhost:44307/api/users/create-trainer';

  constructor(private http: HttpClient) { }

  createTrainerAccount(trainer: AddTrainerModel): Observable<AddTrainerModel> {
    return this.http.post<AddTrainerModel>(this.postResourceUrl, trainer);
  }

}
