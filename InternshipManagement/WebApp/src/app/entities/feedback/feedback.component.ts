import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FeedbackModel} from './feedback.model';
import {InternModel} from '../projects/intern/intern.model';
import {InternService} from '../projects/intern/intern.service';
import {FeedbackService} from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  form: FormGroup;
  feedback: FeedbackModel = new FeedbackModel();
  interns: InternModel[] = [];

  constructor(
    private internService: InternService,
    private feedbackService: FeedbackService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.form = formBuilder.group({
      intern: ['', Validators.required],
      rating: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.internService.getAll().subscribe(res => {
      this.interns = res;
    });
  }

  save() {
    this.feedback.idMentor = JSON.parse(localStorage.getItem('currentUser')).id;
    this.feedbackService.post(this.feedback).subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('The feedback was successfully added', 'Dismiss');
    });
  }

  close() {
    this.dialogRef.close();
  }
}
