import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate {
    TOKEN: string = "zenithToken";

    getToken(): string {
        let token:string = localStorage.getItem(this.TOKEN);

        if (token == undefined) {
            return "";
        }
        return token;
    }

    setToken(token:string):void {
        localStorage.setItem(this.TOKEN, token);
    }

    isLoggedIn(): boolean {
        return this.getToken().length > 0;
    }

    logout(): void {
        localStorage.setItem(this.TOKEN, "");
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return this.isLoggedIn();
    }
}