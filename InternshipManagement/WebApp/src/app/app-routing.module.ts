import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './entities/projects/projects.component';
import {TeamsComponent} from './entities/teams/teams.component';
import { LoginComponent } from './entities/login/login/login.component';
import { AuthGuard } from './guards';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/projects', pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'teams', component: TeamsComponent, canActivate: [AuthGuard]
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
