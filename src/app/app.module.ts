import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
MatToolbarModule,
MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatCardModule,
MatSlideToggleModule,
MatSelectModule,
MatOptionModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
