import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent
  extends SimpleModalComponent<null, boolean>
  implements OnInit
{
  aboutDetails: string = '';

  constructor(private calendarService: CalendarService) {
    super();
  }

  ngOnInit(): void {
    this.aboutDetails = this.calendarService.getAboutDetails();
  }
}
