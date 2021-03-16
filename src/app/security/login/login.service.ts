import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


import { MEAT_API } from "app/app.api";
import { User } from "./user.model";
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class LoginService {
    user: User;
    lastUrl: string

    constructor(private http: HttpClient,
        private route: Router,
    ) {
        this.route.events.filter(e => e instanceof NavigationEnd)
                         .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }
    isLoggedIn(): boolean {
        return this.user !== undefined
    }
    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${MEAT_API}/login`, { email: email, password: password })
            .do(user => this.user = user)
    }
    logout() {
        this.user = undefined;
    }
    handleLogin(path: string = this.lastUrl) {
        this.route.navigate(['/login', btoa(path)])
    }
}