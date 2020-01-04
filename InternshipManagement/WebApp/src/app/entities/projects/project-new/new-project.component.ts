import {Component, Inject} from '@angular/core';
import {ProjectService} from '../project.service';
import {ProjectModel} from '../project.model';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: 'new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {

  form: FormGroup;
  project: ProjectModel = new ProjectModel();

  constructor(private projectService: ProjectService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<NewProjectComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private snackBar: MatSnackBar) {

    this.form = formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      technologyStack: ['', Validators.required]
    });
  }

  save() {
    console.log('saved', this.project);
    this.projectService.create(this.project).subscribe(res => {
      this.dialogRef.close();
      this.snackBar.open('The project was successfully created', 'Dismiss', {duration: 3000});
    },
      error => {
          this.dialogRef.close();
      } );
  }

  close() {
    this.dialogRef.close();
  }
}
