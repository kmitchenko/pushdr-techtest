# Push Doctor

Front End Technical Test

At Push Doctor we help patients see health care professionals at a time and place to suit them.

As part of this technical test we would like you to build a simple booking app, where a patient could pick a date and time to book an appointment.

The application should:

- Have a calendar which allows a patient to select a day for an appointment and shows days with existing bookings.
- Have a form for the user to provide:
  - Requested Appointment Time (mandatory)
  - First Name (mandatory)
  - Surname (mandatory)
  - Any notes about why they want an appointment.
- Use data provided by the sample API and post data about new appointments back to the API.

# API

A sample API has been created using `json-server`.
To run, please follow instructions on https://github.com/typicode/json-server, or in brief:

- Run `npm install -g json-server` to install json-server
- Run `json-server --watch db.json` to start the server.
- Navigate to http://localhost:3000/appointments
- Check the docs for other methods including filters to fetch the data.

Data is provided for:

- Booked appointments: `/appointments`
  Please extend these if you think the application requires it - data stored in db.json

# Front-end

We primarily use Angular at Push Doctor, so it would be preferable if you could have a go at completing this with Angular. If you are uncomfortable attempting this task in Angular, please use any JS framework you are comfortable with. Also feel free to include any third party JS or CSS libraries.

If you are completing this in Angular we've provided a solution set up and ready to go. If you are new to Angular these npm commands should get you up and running:

- `npm install @angular/cli -g`
- `npm install`
- `ng serve -o`

Helpful documentation:

- https://angular.io/start
- https://github.com/kevcjones/ngx-simple-modal

# Finally

Please fork this repo before starting and send us a link to your fork when completed.
Bonus points if you commit regularly so we can see how you approach the problem.

Don't worry if you don't get it all finished or working, and don't spend too long on it, we are just looking for an indication of how you approach a problem. Thank you!
