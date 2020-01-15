import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TeamModel } from '../team.model';
import { TrainerService } from '../../projects/trainer.service';
import { InternService } from '../../projects/intern/intern.service';
import { TrainerModel } from '../../projects/trainer.model';
import { InternModel } from '../../projects/intern/intern.model';

@Component({
  selector: 'app-team-members-dialog',
  templateUrl: 'team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {

  team: TeamModel;

  internDataSource: MatTableDataSource<InternModel>;
  trainerDataSource: MatTableDataSource<TrainerModel>;

  internColumns: string[] = ['name', 'age', 'department', 'rating'];
  trainerColumns: string[] = ['name', 'age', 'department', 'technicalLevel'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private trainerService: TrainerService,
    private internService: InternService,
    private dialogRef: MatDialogRef<TeamMembersComponent>,
    @Inject(MAT_DIALOG_DATA) data, ) {
    this.team = data;
  }

  ngOnInit() {
    this.trainerService.getAllByTeamId(this.team.id).subscribe(res => {
      this.trainerDataSource = new MatTableDataSource(res);
      this.trainerDataSource.sort = this.sort;
    });

    this.internService.getAllByTeamId(this.team.id).subscribe(res => {
      this.internDataSource = new MatTableDataSource(res);
      this.internDataSource.sort = this.sort;
    });

    console.log(this.team);
    console.log(this.team);
    console.log(this.team);
  }

  close() {
    this.dialogRef.close();
  }
}
