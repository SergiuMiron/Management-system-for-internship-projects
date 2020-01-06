import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AddInternModel } from './add-intern.model';
import { AddInternService } from './add-intern.service';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.css']
})
export class AddInternComponent {

  form: FormGroup;
  newIntern: AddInternModel = new AddInternModel();

  constructor(
    private addInternService: AddInternService,
    private formBuilder: FormBuilder,
    public toastr: ToastrManager,
    private dialogRef: MatDialogRef<AddInternComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.form = formBuilder.group({
      name: [Validators.required],
      cnp: [Validators.required],
      age: [Validators.required],
      department: [Validators.required],
      username: [Validators.required],
      password: [Validators.required],
    })
  }

  save() {
    this.addInternService.createInternAccount(this.newIntern).subscribe(
      data => {
        this.toastr.successToastr('', "The intern account was successfuly created");
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
