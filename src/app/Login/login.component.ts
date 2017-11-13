import { 
    Component, 
    OnInit, 
    NgZone, 
    ViewChild, 
    Output, 
    EventEmitter 
  } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { UserLogin } from '../Models/User';
import { AuthenticationService } from './../Services/Authentication.Service';
import { AppSettingsService } from '../Services/App-settings.Service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
  @Component({
    selector: "app-Login",
    templateUrl: './login.Component.html'
  })
  export class LoginComponent {
    @Output() checkToken: EventEmitter<any> = new EventEmitter<any>();
    rForm: FormGroup;
    returnUrl: string;
    messages: any = [];
    constructor(private toastr: ToastrService, private fb: FormBuilder,private router: Router,private appSettigs: AppSettingsService,private authenticationService: AuthenticationService,  private route: ActivatedRoute, ) { 
              
         this.rForm = fb.group({
          'Username' : [null, Validators.required],
          'Password' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])]        
        });
     }
    loginModel = new UserLogin();
    loading=false;
   
    ngOnInit() {
     // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    onFormSubmit (e) {    
      this.loading=true;
      this.returnUrl;
      this.loginModel.UserName = e.Username;
      this.loginModel.Password = e.Password;
      this.authenticationService.login(this.loginModel)
      .subscribe(
        data => {          
          if (data.Message == "Success" || data.StatusCode==200) {
            localStorage.setItem('authenticationtoken', data.data.Token);
            localStorage.setItem('UserRoles', data.data.Roles[0]);
            // localStorage.setItem('userRoles', data.RolesTicket);
            //localStorage.setItem('userId', data.UserId);
            if (data.data.Roles[0] == "SuperAdmin") {  
                this.checkToken.emit();            
                this.router.navigate(['admin']);              
            }
            else {
              this.checkToken.emit();
            }
          }
          else {
            this.loginModel.ErrorMessage = data.Result;
          }
        },
        error => {          
          this.loading=false;
          this.toastr.error("Invalid Password or User Name");
          if (error.message == 500) {
            
            this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Oops, Something went wrong. Please try again.' });
          }
          else if (error.message == 0) {
            this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Network error, Please try again later' });
          }
          else {
            this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Some error occured, Please contact your admin' });
          }
        });
      // if((e.Username == "naval@yopmail.com") && (e.Password =="naval123"))
      // {
      //       notify({
      //         message: "You have successfully login",
      //         position: {
      //             my: "center top",
      //             at: "center top"
      //         }
      //     }, "success", 2000);
      //     localStorage.setItem('token','sdfsdfdsfdsfdsfdsfdsf');
      //     this.checkToken.emit();
      //     this.router.navigate(['admin']);
      // }
      
      // else{
      //   notify({
      //     message: "Invalid User",
      //     position: {
      //         my: "center top",
      //         at: "center top"
      //     }
      // }, "error", 2000);
      // }
  }

} 