import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SelectItem, ConfirmationService, Message } from 'primeng/primeng';
import { AppSettingsService } from '../Services/App-settings.Service';
import { MessageService } from "primeng/components/common/messageservice";
import { RequestStatus } from '../Shared/enums';

@Injectable()
export class httpClientService {
  msgs: Message[] = [];  
  constructor(
    private http: Http,
    private settings: AppSettingsService,
    public messageService : MessageService
  ) { 
   }

  AuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    //headers.append('LanguageID', localStorage.getItem('languageID'));
    //headers.append('Timezone', new Date().toString().split('(')[1].replace(')', ''));
    //headers.append('userId', localStorage.getItem('userId'));
    headers.append('Authorization', localStorage.getItem('authenticationtoken'));
    //headers.append('userRoles', localStorage.getItem('userRoles'));

  }

  get(url) {
    let fullurl = this.settings.getBaseUrl() + url;
    let headers = new Headers();
    this.AuthorizationHeader(headers);
    return this.http.get(fullurl, {
      headers: headers
    }).map((response: Response) => {
      return response.json();
    }).catch((error: any) => {
      if (error.status === RequestStatus.InternalError) {
        this.messageService.add({severity:'error', detail:'Some error occured please try after some time'});
      }else if (error.status === RequestStatus.NotFound) {
        return Observable.throw(new Error(error.status));
      }else if (error.status === RequestStatus.NotAcceptable) {
        return Observable.throw(new Error(error.status));
      }else if (error.status === RequestStatus.Confilct) {
        return Observable.throw(new Error(error.status));
      }else if(error.status === RequestStatus.Forbidden){
        this.messageService.add({severity:'error', detail:'Access Denied : Please contact system admin'});
      }else {
        return Observable.throw(new Error(error.status));
      }
    });
  }

  post(url, data) {
    let fullurl = this.settings.getBaseUrl() + url;
    let headers = new Headers();
    this.AuthorizationHeader(headers);
    return this.http.post(fullurl, data, {
      headers: headers
    }).map((response: Response) => {
      return response.json();
    }).catch((error: any) => {
      if (error.status === RequestStatus.InternalError) {
        this.messageService.add({severity:'error', detail:'Some error occured please try after some time'});
      }
      else if (error.status === RequestStatus.NotFound) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === RequestStatus.NotAcceptable) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === RequestStatus.Confilct) {
        return Observable.throw(new Error(error.status));
      }else if(error.status === RequestStatus.Forbidden){
        this.messageService.add({severity:'error', detail:'Access Denied : Please contact system admin'});
      }else {
        return Observable.throw(new Error(error.status));
      }
    });
  }
}