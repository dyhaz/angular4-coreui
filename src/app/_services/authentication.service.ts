import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
    private headers = new Headers({'Content-Type': 'application/json'});

    login(username: string, password: string) {
        return this.http.post('http://localhost:6240/api/Account', JSON.stringify({ usernameOrEmailAddress: username, password: password }), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json();
                if (token && token.result) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', JSON.stringify(token));
                    localStorage.setItem('currentUser', JSON.stringify({ username: username }));
                }

                return token;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }
}