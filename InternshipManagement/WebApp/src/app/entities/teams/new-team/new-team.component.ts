import { Component, Inject, OnInit, Optional } from '@angular/core';
import { TeamService } from '../team.service';
import { TrainerService } from '../../projects/trainer.service';
import { TrainerModel } from '../../projects/trainer.model';
import { TeamModel } from '../team.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../projects/project.service';
import { ProjectModel } from '../../projects/project.model';
import { InternModel } from '../../projects/intern/intern.model';
import { InternService } from '../../projects/intern/intern.service';

@Component({
  selector: 'app-new-team',
  templateUrl: 'new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {

  form: FormGroup;
  team: TeamModel = new TeamModel();
  trainers: TrainerModel[] = [];
  interns: InternModel[] = [];
  projects: ProjectModel[] = [];

  constructor(private teamService: TeamService,
    private trainerService: TrainerService,
    private internService: InternService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<NewTeamComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private snackBar: MatSnackBar) {
    this.team = { ...data };

    this.form = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.trainerService.getAll().subscribe(res => {
      this.trainers = res;
    });
    this.internService.getAll().subscribe(res => {
      this.interns = res;
    });
    this.projectService.getAll().subscribe(res => {
      this.projects = res;
    });
  }

  save() {
    if (!this.team.id) {
      this.team.idTrainerCreator = JSON.parse(localStorage.getItem('currentUser')).id;
      this.teamService.create(this.team).subscribe(() => {
        this.dialogRef.close();
        this.snackBar.open('The team was successfully created', 'Dismiss', { duration: 3000 });
      }, () => { this.dialogRef.close(); });
    } else {
      this.trainerService.updateTrainersTeam(this.trainers, this.team.id).subscribe(res => {
      });

      this.internService.updateInternsTeam(this.interns, this.team.id).subscribe(res => {
      });


      this.teamService.update(this.team).subscribe(() => {
        this.dialogRef.close();
        this.snackBar.open('The team was successfully updated', 'Dismiss', { duration: 3000 });
      }, () => { this.dialogRef.close(); });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
