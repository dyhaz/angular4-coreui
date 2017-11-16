import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GrowlModule} from 'primeng/primeng';

import { AuthenticationService, UserService } from '../../_services/index';
import {MessageService} from 'primeng/components/common/messageservice';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, HttpModule }    from '@angular/http';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ PagesRoutingModule, FormsModule, CommonModule, HttpClientModule, HttpModule, GrowlModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    AuthenticationService,
    UserService,
    MessageService
  ],
})
export class PagesModule { }
