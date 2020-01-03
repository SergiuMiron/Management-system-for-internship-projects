import {Component, OnChanges, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {AuthenticationService} from '../entities/login/login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // currentUser: string = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).username : null;
  // isLogged: boolean = localStorage.getItem('currentUser') ? true : false;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  }

  clearUsername() {
    this.authenticationService.deauthenticate();
  }

}
