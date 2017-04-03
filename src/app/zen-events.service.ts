import { Injectable } from '@angular/core';
import { ZenEvents }  from './zen-events';
import { AuthService } from './auth.service';

import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ZenEventsService {

  //private BASE_URL = "http://localhost:5000/api/EventsApi";
  //private ANON_URL = "http://localhost:5000/api/EventsApi/anon";
  private BASE_URL = "http://zenithdotnetwebservice.azurewebsites.net/api/EventsApi";
  private ANON_URL = "http://zenithdotnetwebservice.azurewebsites.net/api/EventsApi/anon";


  constructor(private http: Http, private authService: AuthService) { }

  getZenEvents() : Promise<ZenEvents[]> {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authService.getToken()); 
    headers.append('content-type', 'application/json');

    let options = new RequestOptions({ headers : headers });

    let events: Promise<ZenEvents[]> = this.http.get(this.authService.isLoggedIn() ? this.BASE_URL : this.ANON_URL, options)
      .toPromise().then(response => response.json())
      .catch(this.handleError)

    if(events == undefined) { }

    return events;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
