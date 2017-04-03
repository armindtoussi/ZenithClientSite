import { Component  } from '@angular/core';
import { ZenEventsService } from './zen-events.service';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ZenEventsService],
})


export class AppComponent {
  Title = "Login Page";

  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
}
