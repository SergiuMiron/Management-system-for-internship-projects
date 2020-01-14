import {Component, OnInit, ViewChild} from '@angular/core';
import {TeamModel} from './team.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  team: TeamModel = new TeamModel();
  dataSource: MatTableDataSource<TeamModel>;
  displayedColumns: string[] = ['name', 'description', 'action'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

}
