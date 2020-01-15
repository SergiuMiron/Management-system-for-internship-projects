import {Component, Inject, OnInit} from '@angular/core';
import {EventModel} from '../event.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {EventService} from '../event.service';

@Component({
  selector: 'app-event-dialog',
  templateUrl: 'event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {

  form: FormGroup;
  event: EventModel = new EventModel();

  constructor(private eventService: EventService,
              private formBuilder: FormBuilder,
              private snackbar: MatSnackBar,
              private dialogRef: MatDialogRef<EventDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.event = {...data};

    this.form = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  save() {
    console.log('event to create: ', this.event);
    if (!this.event.id) {
      this.eventService.create(this.event).subscribe(() => {
        this.dialogRef.close();
        this.snackbar.open('The event was successfully created', 'Dismiss');
      });
    } else {
      this.eventService.update(this.event).subscribe(() => {
        this.dialogRef.close();
        this.snackbar.open('The event was successfully updated', 'Dismiss');
      }, () => { this.dialogRef.close(); });
    }
  }

  close() {
    this.dialogRef.close();
  }
}
