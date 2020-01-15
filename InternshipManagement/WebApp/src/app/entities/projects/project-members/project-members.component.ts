import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProjectModel} from '../project.model';
import {TrainerService} from '../trainer.service';
import {ManagerService} from '../manager/manager.service';
import {InternService} from '../intern/intern.service';
import {ManagerModel} from '../manager/manager.model';
import {TrainerModel} from '../trainer.model';
import {InternModel} from '../intern/intern.model';

@Component({
  selector: 'app-project-members-dialog',
  templateUrl: 'project-members.component.html',
  styleUrls: ['./project-members.component.scss']
})
export class ProjectMembersComponent implements OnInit {

  project: ProjectModel;

  managerDataSource: MatTableDataSource<ManagerModel>;
  internDataSource: MatTableDataSource<InternModel>;
  trainerDataSource: MatTableDataSource<TrainerModel>;

  managerColumns: string[] = ['name', 'age', 'department'];
  internColumns: string[] = ['name', 'age', 'department', 'rating'];
  trainerColumns: string[] = ['name', 'age', 'department', 'technicalLevel'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private trainerService: TrainerService,
              private managerService: ManagerService,
              private internService: InternService,
              private dialogRef: MatDialogRef<ProjectMembersComponent>,
              @Inject(MAT_DIALOG_DATA) data, ) {
    this.project = data;
  }

  ngOnInit() {
    this.trainerService.getAllByProjectId(this.project.id).subscribe(res => {
      this.trainerDataSource = new MatTableDataSource(res);
      this.trainerDataSource.sort = this.sort;
    });

    this.managerService.getByProjectId(this.project.id).subscribe(res => {
      const managerArray = [];
      managerArray.push(res);
      this.managerDataSource = new MatTableDataSource(managerArray);
      this.managerDataSource.sort = this.sort;
    });

    this.internService.getAllByProjectId(this.project.id).subscribe(res => {
      this.internDataSource = new MatTableDataSource(res);
      this.internDataSource.sort = this.sort;
    });
  }

  close() {
    this.dialogRef.close();
  }
}
