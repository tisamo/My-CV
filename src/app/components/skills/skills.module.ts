import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material';

import {PreviewvideomodalComponent} from '../previewvideomodal/previewvideomodal.component';

@NgModule({
  declarations: [],
  entryComponents: [PreviewvideomodalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class SkillsModule {
}
