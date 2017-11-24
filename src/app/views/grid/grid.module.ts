import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { GridComponent } from './grid.component';
import { GridRoutingModule } from './grid-routing.module';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import { PaginatorModule } from 'primeng/primeng';
import {CarService, UserService, AuditLogsService} from "../../_services/index";
import {Http, ConnectionBackend, RequestOptions, HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {GrowlModule} from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  imports: [
    GridRoutingModule,
    ChartsModule,
    BsDropdownModule,
    DataTableModule,
    SharedModule,
    PaginatorModule,
      GrowlModule,
    HttpModule, HttpClientModule,
  ],
  declarations: [ GridComponent ],
  providers: [
      CarService,
      UserService,
      AuditLogsService,
      MessageService
  ],
})
export class GridModule { }
