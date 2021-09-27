import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SimpleModalComponent} from 'ngx-simple-modal';
import {TIME_SLOTS} from './config/timeslots.config';
import {Appointment} from './types/appointment.type';
import {AppointmentService} from '../services/appointment.service';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss']
})
export class AppointmentModalComponent
  extends SimpleModalComponent<{ date: Date, takenTimeslots: string[] }, boolean> implements OnInit {
  TIME_SLOTS = TIME_SLOTS;
  appointmentForm: FormGroup;
  date: Date;

  takenTimeslots: string[];
  taken: Set<number>;


  constructor(private fb: FormBuilder,
              private appointmentService: AppointmentService) {
    super();
  }

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      appointmentDateTime: ['', Validators.required],
      patientFirstName: ['', Validators.required],
      patientLastName: ['', Validators.required],
      patientEmail: ['', [Validators.email, Validators.required]]
    });

    this.taken = new Set(this.formatTakenSlots(this.takenTimeslots));
  }

  get form(): any {
    return this.appointmentForm.controls;
  }


  confirm(): void {
    this.appointmentForm.markAllAsTouched();

    if (this.appointmentForm.invalid) return;

    const newAppointment = this.createAppointment(this.date, this.appointmentForm.value);
    this.appointmentService.postAppointment(newAppointment);
    this.close();
  }

  createAppointment(date: Date, form: Appointment): Appointment {
    const selectedTime = +form.appointmentDateTime.slice(0, 2);
    form.appointmentDateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), selectedTime).toISOString();

    return form;
  }

  formatTakenSlots(timeSlots: string[]): number[] {
    const formatedArr = timeSlots.map(val => {
      return new Date(val).getHours();
    });
    return formatedArr;
  }

}
