import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';
import { MatDialogRef } from '@angular/material';

import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './entities/teams/teams.component';
import { ProjectsComponent } from './entities/projects/projects.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectService} from './entities/projects/project.service';
import { AuthenticationService } from './entities/login/login/authentication.service';
import { LoginComponent } from './entities/login/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AddManagerComponent } from './entities/add-manager/add-manager.component';
import { AddManagerService } from './entities/add-manager/add-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ProjectsComponent,
    LoginComponent,
    AddManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ProjectService,
    AuthenticationService,
    AddManagerService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
