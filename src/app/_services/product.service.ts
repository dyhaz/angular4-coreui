import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

    constructor(private http: Http) {}

    getMsProductDropdown(categoryId: number) {
        let request_url = 'http://localhost:6240/api/services/app/msProduct/GetMsProductDropdown?categoryID='+categoryId;
        console.log(request_url);
        let request_body = JSON.stringify({ filter: "", permission: "", role: "", skipCount: "0", maxResultCount: "10" });
        return this.http.post(request_url, request_body, this.jwt()).toPromise()
            .then(res => <any[]> res.json().result.items)
            .then(data => { return data; });
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