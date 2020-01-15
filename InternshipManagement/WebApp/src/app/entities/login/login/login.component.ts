import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    loggedUserId: string = null;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/projects';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.authenticationService.authenticate();

                    this.loggedUserId = JSON.parse(localStorage.getItem('currentUser')).id;
                    console.log("loggeduser: ", this.loggedUserId);

                    this.userService.getManagerById(this.loggedUserId).subscribe(manager => {
                        if (!manager) {
                          this.userService.getTrainerById(this.loggedUserId).subscribe(trainer => {
                            if (!trainer) {
                              this.userService.getInternById(this.loggedUserId).subscribe(intern => {
                                localStorage.setItem('loggedUser', "isIntern");
                              });
                            }
                            else {
                                localStorage.setItem('loggedUser', "isTrainer");
                            }
                          });
                        }
                        else {
                            localStorage.setItem('loggedUser', "isManager");
                        }
                      });

                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

    onClick() {
        this.router.navigate(['/register']);
    }
}
