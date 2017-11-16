import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { GridComponent } from './grid.component';
import { GridRoutingModule } from './grid-routing.module';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import {CarService} from "../../_services/car.service";
import {Http, ConnectionBackend, RequestOptions, HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    GridRoutingModule,
    ChartsModule,
    BsDropdownModule,
    DataTableModule,
    SharedModule,
    HttpModule, HttpClientModule,
  ],
  declarations: [ GridComponent ],
  providers: [
      CarService,
      //Http,
      //ConnectionBackend,
      //RequestOptions
  ],
})
export class GridModule { }
