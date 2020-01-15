import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectModel} from './project.model';
import {ProjectService} from './project.service';
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import {NewProjectComponent} from './project-new/new-project.component';
import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {ProjectMembersComponent} from './project-members/project-members.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project: ProjectModel = new ProjectModel();
  dataSource: MatTableDataSource<ProjectModel>;
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'technologyStack', 'action'];
  // addNewProjectDialog: MatDialogRef<NewProjectComponent>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private projectService: ProjectService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initProjects();
  }

  initProjects() {
    this.projectService.getAll().subscribe(res => {
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

  openProjectDialog(project?: ProjectModel) {
    let dialogConfig = new MatDialogConfig();

    dialogConfig = {
      width: '40%',
      disableClose: true,
      autoFocus: false,
      data: project
    };
    const dialogRef = this.dialog.open(NewProjectComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.initProjects();
    });
  }

  deleteProject(project: ProjectModel) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      disableClose: true,
      autoFocus: false,
      data: 'Are you sure you want to delete this project?'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.delete(project.id).subscribe(res => {
          this.snackBar.open('Project successfully deleted', 'Dismiss', {duration: 3000});
          this.initProjects();
        });
      }
    });
  }

  openMembersDialog(project: ProjectModel) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      width: '50%',
      disableClose: true,
      autoFocus: false,
      data: project
    };
    const dialogRef = this.dialog.open(ProjectMembersComponent, dialogConfig);
  }

}
