import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SimpleModalModule} from 'ngx-simple-modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {CalendarComponent} from './calendar/calendar.component';
import {AppointmentModalComponent} from './appointment-modal/appointment-modal.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AppointmentModalComponent
  ],
  imports: [
    BrowserModule,
    SimpleModalModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent],
})
export class AppModule {
}
