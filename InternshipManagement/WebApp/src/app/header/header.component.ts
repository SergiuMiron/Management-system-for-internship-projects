import { Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthenticationService } from '../entities/login/login/authentication.service';
import { AddManagerComponent } from '../entities/add-manager/add-manager.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // currentUser: string = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).username : null;
  // isLogged: boolean = localStorage.getItem('currentUser') ? true : false;

  constructor(public authenticationService: AuthenticationService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log('onInit: ', this.authenticationService.authenticated)
  }

  clearUsername() {
    this.authenticationService.deauthenticate();
  }

  openAddSdmDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    this.dialog.open(AddManagerComponent, dialogConfig);
  }

}
