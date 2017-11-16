import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll(): Observable<User[]> {
        let request_url = 'http://localhost:6240/api/services/app/user/GetUsers';
        let request_body = JSON.stringify({ filter: "", permission: "", role: "", skipCount: "0", maxResultCount: "10" });
        return this.http.post(request_url, request_body, this.jwt()).map((response: Response) => response.json().result.items);
        //return this.http.get(request_url, this.jwt).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User, assignedRoleNames: any, sendActivationEmail: boolean, setRandomPassword: boolean) {
        return this.http.post('http://localhost:6240/api/services/app/user/CreateOrUpdateUser', {user: user,
            assignedRoleNames: assignedRoleNames, sendActivationEmail: sendActivationEmail,
            setRandomPassword: setRandomPassword}, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('token'));
        if (currentUser && currentUser.result) {
            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.result });
            return { headers: headers };
        }
    }

    /**
     * Handle any errors from the API
     */
    private handleError(err) {
        let errMessage: string;

        if (err instanceof Response) {
            let body   = err.json() || '';
            let error  = body.error || JSON.stringify(body);
            errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
        } else {
            errMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errMessage);
    }
}