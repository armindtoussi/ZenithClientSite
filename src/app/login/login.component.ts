import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AuthService } from '../auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
   // private baseUrl = "http://localhost:5000/connect/token/";
   private baseUrl = "http://zenithdotnetwebservice.azurewebsites.net/connect/token/"

    username: string;
    password: string;

    constructor(
        private http: Http,
        private authService: AuthService) { }

    onLogin() {
        this.login(this.username, this.password)
    }

    login(username:string, password: string) {
        var credentials = 'username=' + username + '&password=' + password + '&grant_type=password';
        var headers     = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var reqOptions  = new RequestOptions ({ headers: headers });

        return this.http.post(this.baseUrl, credentials, reqOptions)
            .toPromise()
            .then(log => {
                var user = log.json();
                this.authService.setToken(user["access_token"]);
            });
    }
}