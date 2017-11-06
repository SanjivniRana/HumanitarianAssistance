import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd , NavigationStart } from '@angular/router';
import { commonService  } from '../../Services/common.service';
import { SelectItem } from 'primeng/primeng';
import { ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';
import { UserType } from "../../shared/enums";
import { AuthenticationService } from '../../Services/Authentication.Service';

@Component({
    selector: "app-sidebar",
    templateUrl: './appSidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppSidebarComponent {
    Patients: Array<SelectItem>;  
    isMaster : boolean = false;
    isAdmin : boolean = false;
    
    constructor(
        private router: Router,
        private commonService : commonService,
        private changeDetector: ChangeDetectorRef,
        private authService : AuthenticationService
    ) {

    }

    ngOnInit() {
        // this.authService
        // .getUserType()
        // .subscribe(data =>{
        //     debugger;
        //    if(data == UserType.Admin){
        //     this.isMaster = false;
        //     this.isAdmin = true;
        //    } else if(data == UserType.Master){
        //     this.isMaster = true;
        //     this.isAdmin = false;
            
        //    }
        //    this.changeDetector.detectChanges();
        //     if(this.authService.getPermissions('AddPatient') || this.authService.getPermissions('EditPatient') || this.authService.getPermissions('DeletePatient'))
        //     {  
        //         this.router.events.subscribe(
        //         event  => {
        //           if(event instanceof NavigationStart) {
        //               this.getPatientDetails();
        //           }
        //         });
        //     }
              
        // }, Error =>{

        // })
        
    }

    goToInventory() {
        this.router.navigate(['/inventory']);
    }

    goToPatient() {
        this.router.navigate(['patientListing']);
    }

    goToPatientDetail(PatientID){
        this.router.navigate(['/patient', PatientID]);
    }

    getPatientDetails(){
        // this.commonService
        // .GetPatients()
        // .subscribe(data => {   
        //     this.Patients = data;
        //     if (!this.changeDetector['destroyed']) {
        //         this.changeDetector.detectChanges();
        //     }
        // }, error =>{

        // })
    }

    getUserType(){
      
    }
}