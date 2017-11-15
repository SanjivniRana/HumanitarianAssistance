import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GLOBAL } from '../shared/global';
import { AppSettingsService } from '../Services/App-settings.Service';
import { RequestStatus } from '../shared/enums'
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable()

export class commonService {
    constructor(private settings: AppSettingsService, private http: Http) { }

    GetProviders() {
        let url = this.settings.getBaseUrl() + GLOBAL.API_Common_GetProviderByMaster;
        return this.http.request(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                return response.json();
            }).catch((error: any) => {
                if (error.status === RequestStatus.InternalError) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === RequestStatus.NotFound) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === RequestStatus.NotAcceptable) {
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === RequestStatus.Confilct) {
                    return Observable.throw(new Error(error.status));
                }
                else {
                    return Observable.throw(new Error(error.status));
                }
            });
    }
    private checktimeout;
    validateCurrentPassword(control:FormControl) :Promise<ValidationErrors>|null|Observable<ValidationErrors> {
        clearTimeout(this.checktimeout);
        return new Promise<any>((resolve,reject)=>{
           this.checktimeout= setTimeout(()=>{
            let Myheaders = new Headers();
            Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
            Myheaders.append("Content-Type", "application/json");
            let options = new RequestOptions({ headers: Myheaders });
            let url=this.settings.getBaseUrl()+GLOBAL.API_CheckCurrentPassword;
            //let obj={Password:control.value.toString()};
            return this.http.get(
                url+"?pwd="+control.value,options).map(response=>response.json())
                .subscribe(data=>{
                    console.log(data);
                    if(data.StausCode==200) {
                        resolve({validateCurrentPassword:true});
                        
                    }else
                    {
                        resolve(null)
                    }
                    
                });
           

            },2000);
            
        });
    }

     verifyCurrentDomain(){
         let parts = location.hostname.split('.');
         let SubDomain = parts.shift();
     }
}
