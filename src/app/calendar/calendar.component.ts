import {Component, OnDestroy, OnInit} from '@angular/core';
import {SimpleModalService} from 'ngx-simple-modal';
import {AppointmentModalComponent} from '../appointment-modal/appointment-modal.component';
import {AppointmentService} from '../services/appointment.service';
import {Appointment} from '../appointment-modal/types/appointment.type';
import {Subscription} from 'rxjs';

@Component({
  selector: 'pushdr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnDestroy {
  today: Date = new Date();
  selectedDate: Date;
  appointments: Appointment[];
  subscription: Subscription;

  constructor(private simpleModalService: SimpleModalService,
              private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.subscription = this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  onSelect(event: Date): void {
    this.selectedDate = event;

    const selectedDayAppointments = this.appointments.filter(one => {
      one.appointmentDateTime = new Date(one.appointmentDateTime).toLocaleString();
      return one.appointmentDateTime.includes(event.toLocaleString().slice(0, 8))
    })

    const takenTimeslots = selectedDayAppointments.map(one => one.appointmentDateTime);

    this.simpleModalService.addModal(AppointmentModalComponent, {
      date: event,
      takenTimeslots: takenTimeslots
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
