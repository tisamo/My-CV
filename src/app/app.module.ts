import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SkillsComponent} from './components/skills/skills.component';
import {InformationsComponent} from './components/informations/informations.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NgbModule, NgbTab, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {PreviewvideomodalComponent} from './components/previewvideomodal/previewvideomodal.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {VgCoreModule} from 'videogular2/compiled/src/core/core';
import {VgControlsModule} from 'videogular2/compiled/src/controls/controls';
import {VgOverlayPlayModule} from 'videogular2/compiled/src/overlay-play/overlay-play';
import {VgBufferingModule} from 'videogular2/compiled/src/buffering/buffering';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    InformationsComponent,
    PreviewvideomodalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PdfViewerModule,
    MatDialogModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PreviewvideomodalComponent]
})
export class AppModule {
}
