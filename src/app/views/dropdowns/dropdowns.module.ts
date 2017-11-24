import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DropdownsComponent } from './dropdowns.component';
import { DropdownsRoutingModule } from './dropdowns-routing.module';


import {SharedModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
import {CarService, UserService, AuditLogsService} from "../../_services/index";
import {Http, ConnectionBackend, RequestOptions, HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {GrowlModule} from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import {ProductService} from "../../_services/product.service";
import { CategoryService } from "../../_services/category.service";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    DropdownsRoutingModule,
    ChartsModule,
    SharedModule,
    GrowlModule,
    DropdownModule,
    AutoCompleteModule,
      FormsModule,
    HttpModule, HttpClientModule,
  ],
  declarations: [ DropdownsComponent ],
  providers: [
      CarService,
      UserService,
      AuditLogsService,
      MessageService,
      ProductService,
      CategoryService
  ],
})
export class DropdownsModule { }
