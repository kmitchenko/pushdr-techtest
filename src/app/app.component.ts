import { Component } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private simpleModalService: SimpleModalService) {}

  about() {
    this.simpleModalService.addModal(AboutComponent);
  }
}
