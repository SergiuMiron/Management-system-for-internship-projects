import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectModel} from './project.model';
import {ProjectService} from './project.service';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import {NewProjectComponent} from './project-new/new-project.component';

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
      data: project
    };
    const dialogRef = this.dialog.open(NewProjectComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.initProjects();
    });
  }

  deleteProject(project: ProjectModel) {
    this.projectService.delete(project.id).subscribe(res => {
      this.snackBar.open('Project successfully deleted', 'Dismiss', {duration: 3000});
      this.initProjects();
    });
  }

}
