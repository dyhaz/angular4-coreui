import {Component, OnInit} from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../_services/index';

@Component({
  templateUrl: 'grid.component.html'
})
export class GridComponent implements  OnInit{
  loading: boolean;
  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.carService.getCarsSmall().then(cars => this.cars = cars);
      this.loading = false;
    }, 1000);
  }
}
