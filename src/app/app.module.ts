import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleModalModule } from 'ngx-simple-modal';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent],
  imports: [BrowserModule, SimpleModalModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent],
})
export class AppModule {}
