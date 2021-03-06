import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  authenticated: BehaviorSubject<boolean> = new BehaviorSubject(!!localStorage.getItem('currentUser'));

  constructor(private http: HttpClient) {
  }

  authenticate() {
    this.authenticated.next(true);
  }

  deauthenticate() {
    this.authenticated.next(false);
  }

  login(username: string, password: string) {
    console.log(username, password);
    return this.http.post<any>('https://localhost:44390/api/users/authenticate', {username, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
