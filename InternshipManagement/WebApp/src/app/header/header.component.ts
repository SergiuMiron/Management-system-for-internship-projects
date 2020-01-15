import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthenticationService } from '../entities/login/login/authentication.service';

import { AddManagerComponent } from '../entities/add-manager/add-manager.component';
import { AddInternComponent } from '../entities/add-intern/add-intern.component';
import { AddTrainerComponent } from '../entities/add-trainer/add-trainer.component';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {Router} from '@angular/router';
import {FeedbackComponent} from '../entities/feedback/feedback.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // currentUser: string = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).username : null;
  // isLogged: boolean = localStorage.getItem('currentUser') ? true : false;
  loggedUser: string;

  constructor(public authenticationService: AuthenticationService,
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
    console.log('onInit: ', this.authenticationService.authenticated);
    this.loggedUser = localStorage.getItem('loggedUser');
  }

  clearUsername() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      disableClose: true,
      autoFocus: false,
      data: 'Are you sure you want to logout?'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.authenticationService.deauthenticate();
        return this.router.navigate(['/login']);
      }
    });
  }

  openAddSdmDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      width: '30%',
      disableClose: true,
      autoFocus: false,
    };

    this.dialog.open(AddManagerComponent, dialogConfig);
  }

  openAddTrainerDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      width: '30%',
      disableClose: true,
      autoFocus: false,
    };

    this.dialog.open(AddTrainerComponent, dialogConfig);
  }

  openAddInternDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      width: '30%',
      disableClose: true,
      autoFocus: false,
    };

    this.dialog.open(AddInternComponent, dialogConfig);
  }

  openFeedbackDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      width: '30%',
      disableClose: true,
      autoFocus: false
    };

    this.dialog.open(FeedbackComponent, dialogConfig);
  }

}
