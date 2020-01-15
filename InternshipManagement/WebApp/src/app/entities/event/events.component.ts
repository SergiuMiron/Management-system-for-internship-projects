import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {EventModel} from './event.model';
import {EventService} from './event.service';
import {EventDialogComponent} from './event-dialog/event-dialog.component';
import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  dataSource: MatTableDataSource<EventModel>;
  displayedColumns: string[] = ['title', 'description', 'startDate', 'endDate', 'department', 'action'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private eventService: EventService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initEvents();
  }

  initEvents() {
    this.eventService.getAll().subscribe(res => {
      console.log('results: ', res);
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

  openEventDialog(event?: EventModel) {
    let dialogConfig = new MatDialogConfig();

    dialogConfig = {
      width: '40%',
      disableClose: true,
      autoFocus: false,
      data: event
    };
    const dialogRef = this.dialog.open(EventDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.initEvents();
    });
  }

  deleteEvent(event: EventModel) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig = {
      disableClose: true,
      autoFocus: false,
      data: 'Are you sure you want to delete this event?'
    };
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventService.delete(event.id).subscribe( res => {
          this.snackBar.open('Event successfully deleted', 'Dismiss');
          this.initEvents();
        });
      }
    });
  }
}
