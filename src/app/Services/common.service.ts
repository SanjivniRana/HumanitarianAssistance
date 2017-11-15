import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GLOBAL } from '../shared/global';
import { AppSettingsService } from '../Services/App-settings.Service';
import { RequestStatus } from '../shared/enums'

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

    

    private handleError(error: Response) {
        
            return Observable.throw(error.json().error || 'Server error');
        }


    // GetPatients() {
    //     let url = this.settings.getBaseUrl() + GLOBAL.API_Common_GetPatients;
    //     return this.http.request(url, {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-Type": "application/json"
    //         })
    //     })
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             return response.json();
    //         }).catch((error: any) => {
    //             if (error.status === RequestStatus.InternalError) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotFound) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotAcceptable) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.Confilct) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //         });
    // }

    // GetSupplierByType(typeID : number) {
    //     let url = this.settings.getBaseUrl() + Global.API_Common_GetSupplierByType +"?typeID=" + typeID;
    //     return this.http.request(url, {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-Type": "application/json"
    //         })
    //     })
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             return response.json();
    //         }).catch((error: any) => {
    //             if (error.status === RequestStatus.InternalError) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotFound) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotAcceptable) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.Confilct) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //         });
    // }

    


    // convertTimeToDate(time: string) {
    //     let newTime: any[] = time.split(":");
    //     var currentDate = new Date();
    //     if (newTime.length == 3) {
    //         currentDate.setHours(newTime[0]);
    //         currentDate.setMinutes(newTime[1]);
    //         currentDate.setSeconds(newTime[2]);
    //     }
    //     return currentDate;
    // }

    // convertDateToTime(date: Date) {
    //     if (date == undefined) {
    //         date = new Date();
    //     }
    //     let Hours: string;
    //     let Minutes: string;
    //     if (date.getHours() < 10) {
    //         Hours = "0" + date.getHours();
    //     }
    //     else {
    //         Hours = date.getHours().toString();
    //     }
    //     if (date.getMinutes() < 10) {
    //         Minutes = "0" + date.getMinutes();
    //     }
    //     else {
    //         Minutes = date.getMinutes().toString();
    //     }
    //     let time = Hours + ":" + Minutes + ":00";
    //     return time;
    // }


    // removeBodyClass(){
    //     document.body.className = "";
    //   }

    // addBodyClass(){
    //     document.body.className = "modal-open";
    // }

    // convertDateToString(date: Date) {
    //     if (date == undefined) {
    //         date = new Date();
    //     }
    //     let Day : string;
    //     let Year: string;
    //     let Month: string;
    //     if (date.getDate() < 10) {
    //         Day = "0" + date.getDate();
    //     }
    //     else {
    //         Day = date.getDate().toString();
    //     }
    //     if (date.getFullYear() < 10) {
    //         Year = "0" + date.getFullYear();
    //     }
    //     else {
    //         Year = date.getFullYear().toString();
    //     }
    //     if ((date.getMonth() +1 ) < 10) {
    //         Month = "0" + (date.getMonth() +1 ) ;
    //     }
    //     else {
    //         Month = (date.getMonth() +1 ).toString();
    //     }
    //   return  Month +"/"+ Day +'/'+ Year;
    // }


    // getState(countryid) {
    //     let url = this.settings.getBaseUrl() + Global.API_Common_GetStates + "?countryid=" + countryid;
    //     return this.http.request(url, {
    //         body: countryid,
    //         method: "GET", headers: new Headers({
    //             "Content-Type": "application/json",
    //             "LanguageID": localStorage.getItem("languageID")
    //         })
    //     })
    //         .map((responce: Response) => {
    //             return responce.json();
    //         });
    // }

    // getCity(stateId) {
    //     let url = this.settings.getBaseUrl() + Global.API_Common_GetCities + "?stateId=" + stateId;
    //     return this.http.request(url, {
    //         body: stateId,
    //         method: "GET", headers: new Headers({
    //             "Content-Type": "application/json",
    //             "LanguageID": localStorage.getItem("languageID")
    //         })
    //     })
    //         .map((responce: Response) => {
    //             return responce.json();
    //         });
    // }

    // GetExamByPatient(PatientID : number) {
    //     let url = this.settings.getBaseUrl() + Global.API_Common_GetExamByPatient +"?PatientID=" + PatientID;
    //     return this.http.request(url, {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-Type": "application/json"
    //         })
    //     })
    //         .map((response: Response) => {
                
    //             return response.json();
    //         }).catch((error: any) => {
    //             if (error.status === RequestStatus.InternalError) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotFound) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotAcceptable) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.Confilct) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //         });
    // }

    // GetItemDetailByID(ItemID : number) {
    //     let url = this.settings.getBaseUrl() + Global.API_Common_GetItemDetails +"?ItemID=" + ItemID;
    //     return this.http.request(url, {
    //         method: "GET",
    //         headers: new Headers({
    //             "Content-Type": "application/json"
    //         })
    //     })
    //         .map((response: Response) => {
                
    //             return response.json();
    //         }).catch((error: any) => {
    //             if (error.status === RequestStatus.InternalError) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotFound) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.NotAcceptable) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else if (error.status === RequestStatus.Confilct) {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //             else {
    //                 return Observable.throw(new Error(error.status));
    //             }
    //         });
    // }


     getParameterByName(name : string) {
         let  url = window.location.href;
         name = name.replace(/[\[\]]/g, "\\$&");
         var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
             results = regex.exec(url);
         if (!results) return null;
         if (!results[2]) return '';
         return decodeURIComponent(results[2].replace(/\+/g, " "));
     }

     verifyCurrentDomain(){
         let parts = location.hostname.split('.');
         let SubDomain = parts.shift();
     }
}
