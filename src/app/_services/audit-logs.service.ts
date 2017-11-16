import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AuditLogs } from '../_models/index';

@Injectable()
export class AuditLogsService {
    constructor(private http: Http) { }

    getAll(skipCount): Observable<AuditLogs[]> {
        let request_url = 'http://localhost:6240/api/services/app/auditLog/GetAuditLogs';
        let request_body = JSON.stringify({
                userName: "",
                serviceName: "",
                methodName: "",
                browserInfo: "",
                hasException: "",
                maxResultCount: 10,
                skipCount: skipCount,
                sorting: null,
                startDate: "2017-11-09T00:00:00.000Z",
                endDate: "2017-11-09T23:59:59.999Z",
        });
        return this.http.post(request_url, request_body, this.jwt()).map((response: Response) => response.json().result.items);
        //return this.http.get(request_url, this.jwt).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('token'));
        if (currentUser && currentUser.result) {
            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.result });
            return { headers: headers };
        }
    }
}