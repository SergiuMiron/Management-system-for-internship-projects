import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './entities/teams/teams.component';
import { ProjectsComponent } from './entities/projects/projects.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {ProjectService} from "./entities/projects/project.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
