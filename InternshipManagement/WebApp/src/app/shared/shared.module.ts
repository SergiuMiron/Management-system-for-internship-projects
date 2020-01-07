import {NgModule} from '@angular/core';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {AngularMaterialModule} from '../angular-material.module';

@NgModule({
  imports: [
    AngularMaterialModule
  ],
  declarations: [
    ConfirmationDialogComponent
  ],
  providers: [
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  exports: []
})
export class SharedModule {}
