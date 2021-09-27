export interface Appointment {
  id?: number,
  appointmentDateTime: string,
  patientFirstName: string,
  patientLastName: string,
  patientEmail: string,
  patientNotes?: string
}
