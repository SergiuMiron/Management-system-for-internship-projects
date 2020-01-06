import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AddManagerModel } from './add-manager.model';
import { AddManagerService } from './add-manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent {

  form: FormGroup;
  newManager: AddManagerModel = new AddManagerModel();

  constructor(
    private addManagerService: AddManagerService,
    private formBuilder: FormBuilder,
    public toastr: ToastrManager,
    private dialogRef: MatDialogRef<AddManagerComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.form = formBuilder.group({
      name:[Validators.required],
      cnp:[Validators.required],
      age:[Validators.required],
      username:[Validators.required],
      password:[Validators.required],
    })
  }


  save() {
    this.addManagerService.createManagerAccount(this.newManager).subscribe(
      data => {
        this.toastr.successToastr('', "The manager account was successfuly created");
        this.dialogRef.close();
      },
      error => {
        this.toastr.errorToastr('', "There was an issue when creating account. Please try again");
      });
  }

  close() {
    this.dialogRef.close();
  }

}
