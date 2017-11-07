import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {Car} from '../admin/user.component';
import { Observable } from 'rxjs/Observable';
import { AddUsers } from '../../Models/AddUser';
@Injectable()
export class UserService {

    constructor(private http: Http) {}

    // getCarsSmall() {
    //     return this.http.get('/showcase/resources/data/cars-small.json')
    //                 .toPromise()
    //                 .then(res => <Car[]> res.json().data)
    //                 .then(data => { return data; });
    // }

    GetUserList(url: string) {
        debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        let options = new RequestOptions({ headers: Myheaders });
        return this.http.get(url, options)
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    return user;
                }

            }).catch(this.handleError);

    }

    AddUser(url: string, model: AddUsers) {
        debugger;
        let Myheaders = new Headers();
        console.log(localStorage.getItem("authenticationtoken"));
        console.log(model);
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });
        
        let a=new RequestOptions();
        let b=
         {
            FirstName:model.FirstName,
            LastName:model.LastName,
            UserName : model.UserName,
        Email : model.Email,
        Password : model.Password,
        UserType : 1,
        OfficeCode : model.OfficeCode,
        DepartmentId :model.DepartmentId,
        Status:model.Status
        
        }
        
        console.log(JSON.stringify(model));
        return this.http.post(url, JSON.stringify(b)
        ,options)            
        .map((response: Response) => {
                let user = response.json();
                if (user) {
                    return user;
                }
            }).catch(this.handleError);

    }

    getOffices(url: string) {
            debugger;
            let Myheaders = new Headers();
            Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
            let options = new RequestOptions({ headers: Myheaders });
            return this.http.get(url,options)
                .map((response: Response) => {
                    let user = response.json();
                    if (user) {
                        console.log(user);
                        return user;
                    }
    
                }).catch(this.handleError);
    
     }    

     getDepartment(url: string ,officeCode) {
        debugger;
        var obj: any = {};
        obj.officeCode   = officeCode;        
        let Myheaders = new Headers();            
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        let options = new RequestOptions({ headers: Myheaders });
        return this.http.get(url+"?officeCode="+officeCode,options) 
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    console.log(user);
                    return user;
                }

            }).catch(this.handleError);

 }

     private handleError(error: Response) {
        
            return Observable.throw(error.json().error || 'Server error');
        }
}