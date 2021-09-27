import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Appointment} from '../appointment-modal/types/appointment.type';
import {map, switchMap, take} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private readonly url = environment.url;
  private appointmentsSubject$: BehaviorSubject<Appointment[]> = new BehaviorSubject<Appointment[]>([]);

  constructor(private http: HttpClient) {
    this.loadAppointments();
  }

  get appointments$(): Observable<Appointment[]> {
    return this.appointmentsSubject$.asObservable();
  }

  addNewAppointment(newAppointment: Appointment): void{
    this.appointments$
      .pipe(take(1),
      switchMap(appointments => this.postAppointment(newAppointment, appointments)))
      .subscribe(allAppointments => this.appointmentsSubject$.next(allAppointments));
  }

  private postAppointment(newAppointment: Appointment, appointments: Appointment[]): Observable<Appointment[]> {
    return this.http.post<Appointment>(`${this.url}/appointments`, newAppointment)
      .pipe(take(1),
        map(appointment => [...appointments, appointment]));
  }

  private loadAppointments(): void{
    this.http.get<Appointment[]>(`${this.url}/appointments`)
      .pipe(take(1))
      .subscribe(appointments => this.appointmentsSubject$.next(appointments));
  }
}
