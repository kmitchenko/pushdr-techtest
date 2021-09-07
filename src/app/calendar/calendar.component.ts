import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pushdr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  viewDate = new Date();

  constructor() {}

  ngOnInit(): void {}
}
