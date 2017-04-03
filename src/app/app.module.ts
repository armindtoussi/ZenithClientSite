import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ZenEventsService } from './zen-events.service';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    LoginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'events',
        component:EventComponent, 
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
  ],
  providers: [ ZenEventsService, AuthService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
