import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

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
import {
  MAT_DIALOG_DATA,
  MatButtonModule, MatDatepickerModule,
  MatDialogModule, MatDialogRef,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {NewProjectComponent} from './entities/projects/project-new/new-project.component';
import {SharedModule} from './shared/shared.module';
import {TrainerService} from "./entities/projects/trainer.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ProjectsComponent,
    LoginComponent,
    NewProjectComponent
  ],
  entryComponents: [
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    ProjectService,
    TrainerService,
    AuthenticationService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
