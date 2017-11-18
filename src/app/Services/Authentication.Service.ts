import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GLOBAL } from '../shared/global';
import { AppSettingsService } from '../Services/App-settings.Service';
import { RequestStatus } from '../shared/enums'
import { UserLogin } from "../Models/User";
import { httpClientService } from "../Auth/httpClient";

@Injectable()
export class AuthenticationService {
    constructor(
        private settings: AppSettingsService, 
        private http: Http,
        private httpClient : httpClientService
    ) { 

    }

    login(loginDetails: UserLogin) {
        debugger;
        let url = this.settings.getBaseUrl() + GLOBAL.API_Login_Auth_Url;
        return this.http.request(url, {
            body: loginDetails,
            method: "POST", headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .map((response: Response) => {
                let loginResponse = response.json();
                localStorage.setItem('authenticationtoken', loginResponse.Token);
                localStorage.setItem('plainRolesText', loginResponse.Roles);
                //localStorage.setItem('userRoles', loginResponse.RolesTicket);
                localStorage.setItem('userId', loginResponse.UserId);
                return loginResponse;
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

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('authenticationtoken');
        localStorage.removeItem('plainRolesText');
        localStorage.removeItem('userRoles');
        localStorage.removeItem('userId');
    }


    getPermissions(role) {
        if (role !== undefined) {
            let Roles = localStorage.getItem('plainRolesText');
            let userRoles = Roles.split('|');
            if (userRoles.filter(x => x.toLowerCase() == role.toLowerCase()).length > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    getUserType(){
        return this.httpClient
        .get(GLOBAL.API_Account_GetUserType);
    }

    getRolesAndPermissionsByUserId(url: string, UserId) {
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        let options = new RequestOptions({ headers: Myheaders });
        return this.http.get(url+"?userid="+UserId, options)
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    return user;
                }
            }).catch(this.handleError);

    }

    private handleError(error: Response) {
        
            return Observable.throw(error.json().error || 'Server error');
        }
}