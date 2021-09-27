import {Component, OnInit} from '@angular/core';
import {SimpleModalService} from 'ngx-simple-modal';
import {AppointmentModalComponent} from '../appointment-modal/appointment-modal.component';

@Component({
  selector: 'pushdr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  today: Date = new Date();
  selectedDate: Date;

  constructor(private simpleModalService: SimpleModalService) {
  }

  ngOnInit(): void {
  }

  onSelect(event: Date): void {
    this.selectedDate = event;

    this.simpleModalService.addModal(AppointmentModalComponent, {
      date: event
    });

  }
}
