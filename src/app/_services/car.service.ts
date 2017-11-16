import {Injectable} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Car} from '../domain/car';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('https://raw.githubusercontent.com/primefaces/primeui/master/showcase/resources/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.json().data)
            .then(data => { return data; });
    }
}