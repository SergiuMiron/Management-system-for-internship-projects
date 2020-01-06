import { Component, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { AddTrainerModel } from './add-trainer.model';
import { AddTrainerService } from './add-trainer.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent {

  form: FormGroup;
  newTrainer: AddTrainerModel = new AddTrainerModel();

  constructor(
    private addManagerService: AddTrainerService,
    private formBuilder: FormBuilder,
    public toastr: ToastrManager,
    private dialogRef: MatDialogRef<AddTrainerComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.form = formBuilder.group({
      name: [Validators.required],
      cnp: [Validators.required],
      age: [Validators.required],
      department: [Validators.required],
      technicalLevel: [Validators.required],
      username: [Validators.required],
      password: [Validators.required],
    })
  }

  save() {
    this.addManagerService.createTrainerAccount(this.newTrainer).subscribe(
      data => {
        this.toastr.successToastr('', "The trainer account was successfuly created");
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
