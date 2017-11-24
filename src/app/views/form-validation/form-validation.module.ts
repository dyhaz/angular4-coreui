import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UserService } from "../../_services/index";
import { MessageService } from 'primeng/components/common/messageservice';

import { FormValidationComponent } from './form-validation.component';
import { FormValidationRoutingModule } from './form-validation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import {GrowlModule} from 'primeng/primeng';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    FormValidationRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HttpModule,
    GrowlModule
  ],
  declarations: [ FormValidationComponent ],
  providers: [
    UserService,
    MessageService
  ]
})
export class FormValidationModule { }
