import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './entities/projects/projects.component';
import {TeamsComponent} from './entities/teams/teams.component';
import { LoginComponent } from './entities/login/login/login.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'teams', component: TeamsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
