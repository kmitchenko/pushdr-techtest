import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Appointment} from '../appointment-modal/types/appointment.type';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly url = environment.url;

  constructor(private http: HttpClient) {
  }

  postAppointment(newAppointment: Appointment): void {
    this.http.post<Appointment>(`${this.url}/appointments`, newAppointment).pipe(take(1)).subscribe();
  }
}
