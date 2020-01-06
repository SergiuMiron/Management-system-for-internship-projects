import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ProjectService} from '../project.service';
import {ProjectModel} from '../project.model';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TrainerService} from '../trainer.service';
import {TrainerModel} from '../trainer.model';

@Component({
  selector: 'app-new-project',
  templateUrl: 'new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  form: FormGroup;
  project: ProjectModel = new ProjectModel();
  trainers: TrainerModel[] = [];

  constructor(private projectService: ProjectService,
              private trainerService: TrainerService,
              private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<NewProjectComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private snackBar: MatSnackBar) {
    this.project = {...data};

    this.form = formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      technologyStack: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.trainerService.getAll().subscribe(res => {
      this.trainers = res;
    });
  }

  save() {
    console.log('saved', this.project);
    if (!this.project.id) {
      this.projectService.create(this.project).subscribe(() => {
          this.dialogRef.close();
          this.snackBar.open('The project was successfully created', 'Dismiss', {duration: 3000});
        }, () => { this.dialogRef.close(); });
    } else {
      this.projectService.update(this.project).subscribe(() => {
        this.dialogRef.close();
        this.snackBar.open('The project was successfully updated', 'Dismiss', {duration: 3000});
      }, () => { this.dialogRef.close(); });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
