import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './service/material/mat-material';
// import {MatButtonModule} from '@angular/material/button';
// import {MatTableModule} from '@angular/material/table';
import { RecordListComponent } from './components/record-list/record-list.component';
import { RecordDetailsComponent } from './components/record-details/record-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordListComponent,
    RecordDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // MatTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
