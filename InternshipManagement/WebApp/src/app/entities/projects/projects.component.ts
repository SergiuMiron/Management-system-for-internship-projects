import { Component, OnInit } from '@angular/core';
import {ProjectModel} from './project.model';
import {ProjectService} from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project: ProjectModel = new ProjectModel();
  arrayOfProjects: ProjectModel[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.initProjects();
  }

  initProjects() {
    this.projectService.getAll().subscribe(res => {
      console.log('all projects: ', res);
      this.arrayOfProjects = res;
    });
  }

  save() {
    console.log('saved', this.project);
    this.projectService.create(this.project).subscribe(res => {
      console.log(res);
      this.initProjects();
    });
  }

}
