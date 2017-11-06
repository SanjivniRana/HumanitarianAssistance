import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Car} from '../admin/user.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    _http: any;

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
        return this._http.get(url, options)
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    return user;
                }

            }).catch(this.handleError);

    }

    AddUser(url: string, model: any) {
        debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        let options = new RequestOptions({ headers: Myheaders });
        return this._http.post(url, model, options)
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