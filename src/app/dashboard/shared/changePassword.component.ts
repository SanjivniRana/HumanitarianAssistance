import {PasswordModule} from 'primeng/primeng';
import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector : "app-changepassword",
    templateUrl:'./changePassword.component.html'
    // providers:[FormGroup]
})
export class ChangePasswordComponent
{
    modalChangePassword: BsModalRef;
    private ChangePassword: FormGroup;
    constructor(
        private modalService: BsModalService,
        private fb: FormBuilder){

        }
    config = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
      };
    ChangePasswordModal(template: TemplateRef<any>) {          
        this.modalChangePassword = this.modalService.show(
          template,
          Object.assign({}, this.config, { class: 'gray modal-lg' })
        );
      }
}