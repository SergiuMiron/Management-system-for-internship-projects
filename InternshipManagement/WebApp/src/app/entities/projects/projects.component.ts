import { Component, OnInit } from '@angular/core';
import {ProjectModel} from './project.model';
import {ProjectService} from "./project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project: ProjectModel = new ProjectModel();

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  save() {
    console.log('saved', this.project);
    this.projectService.create(this.project).subscribe(res => {
      console.log(res);
    });
  }

}
