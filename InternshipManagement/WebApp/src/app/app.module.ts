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
import {
  MatButtonModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatNativeDateModule, MatPaginatorModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {NewProjectComponent} from './entities/projects/project-new/new-project.component';
import {SharedModule} from './shared/shared.module';

import { AddManagerComponent } from './entities/add-manager/add-manager.component';
import { AddInternComponent } from './entities/add-intern/add-intern.component';
import { AddTrainerComponent } from './entities/add-trainer/add-trainer.component';

import { AddManagerService } from './entities/add-manager/add-manager.service';
import { AddTrainerService } from './entities/add-trainer/add-trainer.service';
import { AddInternService } from './entities/add-intern/add-intern.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ProjectsComponent,
    LoginComponent,
    NewProjectComponent,
    AddManagerComponent,
    AddInternComponent,
    AddTrainerComponent
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
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ProjectService,
    AuthenticationService,
    AddManagerService,
    AddTrainerService,
    AddInternService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
