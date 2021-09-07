import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}

  getAboutDetails() {
    return 'At Push Doctor, we have built powerful tools to help clinicians, patients and healthcare leaders achieve their goals.';
  }
}
