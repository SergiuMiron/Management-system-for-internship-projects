import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamModel } from './team.model';
import { TeamService} from './team.service';
import {
  MatDialog,
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource
} from '@angular/material';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  team: TeamModel = new TeamModel();
  dataSource: MatTableDataSource<TeamModel>;
  displayedColumns: string[] = ['name', 'description', 'action'];
  // addNewProjectDialog: MatDialogRef<NewProjectComponent>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private teamService: TeamService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initTeams();
  }

  initTeams() {
    this.teamService.getAll().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // openProjectDialog(team?: TeamModel) {
  //   let dialogConfig = new MatDialogConfig();

  //   dialogConfig = {
  //     width: '40%',
  //     disableClose: true,
  //     autoFocus: false,
  //     data: team
  //   };
  //   const dialogRef = this.dialog.open(NewProjectComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(() => {
  //     this.initProjects();
  //   });
  // }

  // deleteProject(team: TeamModel) {
  //   let dialogConfig = new MatDialogConfig();
  //   dialogConfig = {
  //     disableClose: true,
  //     autoFocus: false,
  //     data: 'Are you sure you want to delete this team?'
  //   };
  //   const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.teamService.delete(team.id).subscribe(res => {
  //         this.snackBar.open('Team successfully deleted', 'Dismiss', {duration: 3000});
  //         this.initTeams();
  //       });
  //     }
  //   });
  // }

  // openMembersDialog(project: ProjectModel) {
  //   let dialogConfig = new MatDialogConfig();
  //   dialogConfig = {
  //     width: '50%',
  //     disableClose: true,
  //     autoFocus: false,
  //     data: project
  //   };
  //   const dialogRef = this.dialog.open(ProjectMembersComponent, dialogConfig);
  // }

}
