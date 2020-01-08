import { NgModule } from '@angular/core';
import {
  _MatMenuDirectivesModule,
  MAT_DIALOG_DATA,
  MatButtonModule, MatDatepickerModule,
  MatDialogModule, MatDialogRef, MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatSelectModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule,
    MatMenuModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatExpansionModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatExpansionModule
  ]
})
export class AngularMaterialModule { }
