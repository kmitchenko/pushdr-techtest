import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SimpleModalComponent} from 'ngx-simple-modal';
import {TIME_SLOTS} from './config/timeslots.config';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss']
})
export class AppointmentModalComponent
  extends SimpleModalComponent<{ date: Date }, boolean> implements OnInit {
  TIME_SLOTS = TIME_SLOTS;
  appointmentForm: FormGroup;
  date: Date;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      time: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
  }

  get form(): any {
    return this.appointmentForm.controls;
  }


  confirm(): void {
    this.appointmentForm.markAllAsTouched();

    if (this.appointmentForm.invalid) return;
    this.close();
  }

}
