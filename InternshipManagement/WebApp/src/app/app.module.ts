import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './entities/login/login/login.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './entities/teams/teams.component';
import { ProjectsComponent } from './entities/projects/projects.component';
import { NewProjectComponent } from './entities/projects/project-new/new-project.component';
import { NewTeamComponent } from './entities/teams/new-team/new-team.component';
import { AddManagerComponent } from './entities/add-manager/add-manager.component';
import { AddInternComponent } from './entities/add-intern/add-intern.component';
import { AddTrainerComponent } from './entities/add-trainer/add-trainer.component';
import { TeamMembersComponent } from './entities/teams/team-members/team-members.component';

import { AddManagerService } from './entities/add-manager/add-manager.service';
import { AddTrainerService } from './entities/add-trainer/add-trainer.service';
import { AddInternService } from './entities/add-intern/add-intern.service';
import { TrainerService } from './entities/projects/trainer.service';
import { ProjectService } from './entities/projects/project.service';
import { AuthenticationService } from './entities/login/login/authentication.service';
import { TeamService } from './entities/teams/team.service';
import {ProjectMembersComponent} from './entities/projects/project-members/project-members.component';
import {ManagerService} from './entities/projects/manager/manager.service';
import {InternService} from './entities/projects/intern/intern.service';
import {FeedbackComponent} from './entities/feedback/feedback.component';
import {FeedbackService} from './entities/feedback/feedback.service';
import {EventsComponent} from './entities/event/events.component';
import {EventService} from './entities/event/event.service';
import {EventDialogComponent} from './entities/event/event-dialog/event-dialog.component';
import { UserService } from "./shared/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ProjectsComponent,
    LoginComponent,
    NewProjectComponent,
    NewTeamComponent,
    AddManagerComponent,
    AddInternComponent,
    AddTrainerComponent,
    ProjectMembersComponent,
    TeamMembersComponent,
    ProjectMembersComponent,
    FeedbackComponent,
    EventsComponent,
    EventDialogComponent
  ],
  entryComponents: [
    NewProjectComponent,
    NewTeamComponent,
    ProjectMembersComponent,
    TeamMembersComponent,
    ProjectMembersComponent,
    EventDialogComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    ProjectService,
    AuthenticationService,
    AddManagerService,
    AddTrainerService,
    AddInternService,
    TrainerService,
    AuthenticationService,
    ManagerService,
    InternService,
    TeamService,
    FeedbackService,
    EventService,
    TeamService,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
