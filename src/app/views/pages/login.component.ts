import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../_services/index';

import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

//import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2';
//import swal, { SweetAlertOptions, SweetAlertType } from 'sweetalert2';

export class MessageModel {

  msgs: Message[] = [];

}

@Component({
  templateUrl: 'login.component.html',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  //@ViewChild('dialog')
  //public dialog: SwalComponent;

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private messageService: MessageService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
              this.router.navigate([this.returnUrl]);
            },
            error => {
              console.log(error);
              this.messageService.add({severity: 'error', summary: 'Login Failed!', detail: error});
              //this.dialog.show();
              this.loading = false;
            });
  }
}
