import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {AngularMaterialModule} from '../angular-material.module';
import {LoaderComponent} from './loader/loader.component';
import {LoaderService} from './loader/loader.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule
  ],
  declarations: [
    ConfirmationDialogComponent,
    LoaderComponent
  ],
  providers: [
    LoaderService
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  exports: [
    ConfirmationDialogComponent,
    LoaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
