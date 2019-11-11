import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './entities/projects/projects.component';
import {TeamsComponent} from './entities/teams/teams.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/projects', pathMatch: 'full'
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'teams', component: TeamsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
