import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {ProjectModel} from '../project.model';
import {TrainerService} from '../trainer.service';
import {ManagerService} from '../manager/manager.service';

@Component({
  selector: 'app-project-members-dialog',
  templateUrl: 'project-members.component.html',
  styleUrls: ['./project-members.component.scss']
})
export class ProjectMembersComponent implements OnInit {

  project: ProjectModel;

  constructor(private trainerService: TrainerService,
              private managerService: ManagerService,
              private dialogRef: MatDialogRef<ProjectMembersComponent>,
              @Inject(MAT_DIALOG_DATA) data, ) {
    this.project = data;
  }

  ngOnInit() {
    this.trainerService.getAllByProjectId(this.project.id).subscribe(res => {
      console.log('res1: ', res);
    });

    this.managerService.getByProjectId(this.project.id).subscribe(res => {
      console.log('res2: ', res);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
