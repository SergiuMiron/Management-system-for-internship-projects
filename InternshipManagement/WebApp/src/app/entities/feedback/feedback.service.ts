import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FeedbackModel} from './feedback.model';
import {Observable} from 'rxjs';

@Injectable()
export class FeedbackService {
  private postResourceUrl = 'https://localhost:44307/api/feedbacks/create-feedback';

  constructor(private http: HttpClient) {}

  post(feedback: FeedbackModel): Observable<FeedbackModel> {
    return this.http.post<FeedbackModel>(this.postResourceUrl, feedback);
  }
}
