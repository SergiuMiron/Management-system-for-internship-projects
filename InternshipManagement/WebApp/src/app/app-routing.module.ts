import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './entities/projects/projects.component';
import {TeamsComponent} from './entities/teams/teams.component';
import { LoginComponent } from './entities/login/login/login.component';
import { AddManagerComponent } from './entities/add-manager/add-manager.component';
import { AddTrainerComponent } from './entities/add-trainer/add-trainer.component';
import { AddInternComponent } from './entities/add-intern/add-intern.component';

import { AuthGuard } from './guards';
import {FeedbackComponent} from './entities/feedback/feedback.component';
import {EventsComponent} from './entities/event/events.component';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'teams', component: TeamsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'schedule', component: EventsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'add-manager', component: AddManagerComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-trainer', component: AddTrainerComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-intern', component: AddInternComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
