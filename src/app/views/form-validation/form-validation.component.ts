import {OnInit, Component} from "@angular/core";

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { patternValidator } from 'app/shared/pattern-validator';

import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export class MessageModel {
    msgs: Message[] = [];
}

@Component({
    moduleId: module.id,
    templateUrl: 'form-validation.component.html',
    animations: [
        trigger('visibilityChanged', [
            state('shown' , style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('shown => hidden', animate('600ms')),
            transition('hidden => shown', animate('300ms')),
        ])
    ],
    providers: [MessageService]
})

export class FormValidationComponent implements OnInit {
    registrationForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private messageService: MessageService) { }

    ngOnInit():void {
        this.createForm();
    }

    private createForm() {
        this.registrationForm = new FormGroup({
            // tslint:disable-next-line
            emailAddress: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            password: new FormControl('', Validators.required),
            userName: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            phoneNumber: new FormControl('', Validators.required),
            isActive: new FormControl(''),
            isTwoFactorEnabled: new FormControl(''),
            isLockOutEnabled: new FormControl(''),
            shouldChangePasswordOnNextLogin: new FormControl(''),
        });
    }

    register():void {
        this.loading = true;
        var user = new User();
        user.emailAddress = this.model.emailAddress;
        user.name = this.model.name;
        user.password = this.model.password;
        user.surname = this.model.surname;
        user.phoneNumber = this.model.phoneNumber;
        user.userName = this.model.userName;
        user.isActive = this.model.isActive;
        user.isLockoutEnabled = this.model.isLockoutEnabled;
        user.isTwoFactorEnabled = this.model.isTwoFactorEnabled;
        user.shouldChangePasswordOnNextLogin = this.model.shouldChangePasswordOnNextLogin;
        this.userService.create(user, ['Admin'], false, false)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                    this.loading = false;
                });
    }

    showValidationError() {
        console.log("validation error");
        this.messageService.add({severity: 'error', summary: 'Error!', detail: 'Validation failed'});
        return false;
    }

    model: any = {};
    loading = false;
}