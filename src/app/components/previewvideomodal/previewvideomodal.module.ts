import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material';
import {PreviewvideomodalComponent} from './previewvideomodal.component';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {VgControlsModule} from 'videogular2/compiled/src/controls/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/src/overlay-play/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/src/buffering/buffering';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    MatDialogModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [],


})
export class PreviewvideomodalModule {
}
