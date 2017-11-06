import { Component, OnInit, NgZone,Output, EventEmitter,ViewChild } from '@angular/core';
import {PasswordModule} from 'primeng/primeng';
import { LanguageChange } from '../../Shared/languageChange';
import{CommonService}from '../../app.common';
import { ActivatedRoute, Route, Router } from '@angular/router';
//import {ChangePasswordComponent} from '../shared/changePassword.component';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
    selector : "app-header",
    templateUrl:'./appHeader.component.html',
  //  providers:[//ChangePasswordComponent]
})

export class AppHeaderComponent {
    @Output() checkToken : EventEmitter<any> = new EventEmitter<any>();
   // @ViewChild(ChangePasswordComponent) changepassword:ChangePasswordComponent;
    display: boolean = false;
    currentLanguage : string =  'en';
    commonService=new CommonService();
    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;

    constructor(  
        private idle: Idle,
        private keepalive: Keepalive,
        private  languageChange : LanguageChange,
        private route: ActivatedRoute,
        private router: Router,
        private zone: NgZone
    ) { 
        debugger;
        let token=localStorage.getItem('authenticationtoken');
        
        idle.setIdle(300);
        idle.setTimeout(400);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
        idle.onTimeout.subscribe(() => {
          this.idleState = 'Timed out!';
          this.timedOut = true;
          this.logout();
        });
        idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
        idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');
        keepalive.interval(60);
        keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this.reset();
    
    }

    changeLang(lang){
        this.languageChange.changeLang(lang)
        this.currentLanguage = lang;        
      }

     logout(){
         debugger;
        localStorage.removeItem('authenticationtoken');
        localStorage.removeItem('languageID');
        localStorage.removeItem('ng2Idle.main.expiry');
        localStorage.removeItem('ng2Idle.main.idling');
        localStorage.removeItem('plainRolesText');        
        localStorage.removeItem('userId');     
        localStorage.removeItem('UserRoles');
        this.commonService.menuVisibility=false;
        this.checkToken.emit();
        this.router.navigateByUrl("#");
        this.idle.stop();
    }
    changePassword(display:boolean)
    {
     // this.changepassword.clickme(true);
    }
    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
      }
}