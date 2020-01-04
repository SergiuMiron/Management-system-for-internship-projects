import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectModel} from './project.model';
import {ProjectService} from './project.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NewProjectComponent} from './project-new/new-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project: ProjectModel = new ProjectModel();
  dataSource: MatTableDataSource<ProjectModel>;
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'technologyStack'];
  // addNewProjectDialog: MatDialogRef<NewProjectComponent>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private projectService: ProjectService,
              private dialog: MatDialog) { }

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

  openAddProjectDialog() {
    let dialogConfig = new MatDialogConfig();

    dialogConfig = {
      width: '25%',
      disableClose: true
    };
    const dialogRef = this.dialog.open(NewProjectComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.initProjects();
    });
  }

}
