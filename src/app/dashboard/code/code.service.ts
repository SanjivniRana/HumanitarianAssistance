import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CurrencyCode, OfficeCode, OfficeCodefordelete, EmailSetting } from '../../Models/CodeModel';

//chartOfAccounts------------------------------------>
export class ChartOfAccountLevel {
    ID: number;
    AccountLevel: string;
    ChartOfAccountLevelDetails: ChartOfAccountLevelDetail[];
}

export class ChartOfAccountLevelDetail {
    ID: number;
    AccountCode: number;
    AccountName: string;
    AccountType: number;
}

export class AccountType {
    ID: number;
    AccountTypeName: string;
}
//chartOfAccounts------------------------------------>

//analyticalCodes
export class AnalyticalCode {
    ID: number;
    Code: string;
    Donor: string;
    Program: string;
    Project: string;
    Area: string;
    Sector: string;
    Job: string;
    Description: string;
    Amount: string;
    Currency: string;
    Book: string;
    DonorCode: string;
    Status: boolean;
}

//analyticalCodes ---> Projects Tab-5
export class ProjectTab {
    ID: number;
    Code: string;
    Description: string;
    Program: string;
    Budget: number;
    ProjectStartDate: string;
    ProjectEndDate: string;
    ReceivedAmount: number;
    ProjectCurrency: string;
    Status: boolean;
}

//JournalCode
export class JournalCode {
    ID: number;
    JournalName: string;
}

//chartOfAccounts
let accountTypeDropdowns: string[] = [
    'Expandable', 'Non Expandable', 'Other'];

let accountLevelDropdowns: string[] = [
    'Main level', 'Control level', 'Sub level', 'Input level'];



let chartOfAccountLevels: ChartOfAccountLevel[] = [
    {
        "ID": 1,
        "AccountLevel": "Main Level",
        "ChartOfAccountLevelDetails": [
            {
                "ID": 1,
                "AccountCode": 1,
                "AccountName": "Saving",
                "AccountType": 1
            },
            {
                "ID": 2,
                "AccountCode": 2,
                "AccountName": "Current",
                "AccountType": 2,
            }
        ]

    },
    {
        "ID": 2,
        "AccountLevel": "Control Level",
        "ChartOfAccountLevelDetails": [
            {
                "ID": 1,
                "AccountCode": 1,
                "AccountName": "Saving",
                "AccountType": 2
            },
            {

                "ID": 3,
                "AccountCode": 3,
                "AccountName": "Other",
                "AccountType": 1
            }
        ]

    },
    {
        "ID": 3,
        "AccountLevel": "Sub Level",
        "ChartOfAccountLevelDetails": [
            {
                "ID": 1,
                "AccountCode": 1,
                "AccountName": "Saving",
                "AccountType": 2
            }
        ]

    },
    {
        "ID": 4,
        "AccountLevel": "Input Level",
        "ChartOfAccountLevelDetails": [
            {
                "ID": 1,
                "AccountCode": 1,
                "AccountName": "Saving",
                "AccountType": 3
            },
            {
                "ID": 2,
                "AccountCode": 1,
                "AccountName": "Saving",
                "AccountType": 1
            },
            {
                "ID": 3,
                "AccountCode": 1,
                "AccountName": "Current",
                "AccountType": 2
            },
            {
                "ID": 4,
                "AccountCode": 4,
                "AccountName": "Current",
                "AccountType": 3
            }
        ]

    }
];

//analyticalCodes
let analyticalCodes: AnalyticalCode[] = [
    {
        "ID": 1,
        "Code": "Main",
        "Donor": "Main",
        "Program": "Main",
        "Project": "Main",
        "Area": "Main",
        "Sector": "Main",
        "Job": "Main",
        "Description": "Main",
        "Amount": "Main",
        "Currency": "Afg",
        "Book": "Main",
        "DonorCode": "Main",
        "Status": true
    },
    {
        "ID": 2,
        "Code": "Main",
        "Donor": "Main",
        "Program": "Main",
        "Project": "Main",
        "Area": "Main",
        "Sector": "Main",
        "Job": "Main",
        "Description": "Main",
        "Amount": "Main",
        "Currency": "Afg",
        "Book": "Main",
        "DonorCode": "Main",
        "Status": true
    },
    {
        "ID": 3,
        "Code": "Main",
        "Donor": "Main",
        "Program": "Main",
        "Project": "Main",
        "Area": "Main",
        "Sector": "Main",
        "Job": "Main",
        "Description": "Main",
        "Amount": "Main",
        "Currency": "USD",
        "Book": "Main",
        "DonorCode": "Main",
        "Status": false
    },
    {
        "ID": 4,
        "Code": "Main",
        "Donor": "Main",
        "Program": "Main",
        "Project": "Main",
        "Area": "Main",
        "Sector": "Main",
        "Job": "Main",
        "Description": "Main",
        "Amount": "Main",
        "Currency": "USD",
        "Book": "Main",
        "DonorCode": "Main",
        "Status": true
    }
];

//analyticalCodes --> Projects Tab-5
let projectTabs: ProjectTab[] = [
    {
        "ID": 1,
        "Code": "12232",
        "Description": "ERP",
        "Program": "ERP-Tech",
        "Budget": 500000,
        "ProjectStartDate": "01/20/2017",
        "ProjectEndDate": "03/29/2017",
        "ReceivedAmount": 152100,
        "ProjectCurrency": "USD",
        "Status": true
    },
    {
        "ID": 2,
        "Code": "23412",
        "Description": "ERP",
        "Program": "ERP-Tech",
        "Budget": 625124,
        "ProjectStartDate": "01/20/2017",
        "ProjectEndDate": "05/29/2017",
        "ReceivedAmount": 25000,
        "ProjectCurrency": "AFG",
        "Status": true
    },
    {
        "ID": 3,
        "Code": "12232",
        "Description": "Health Care",
        "Program": "ERP-Tech",
        "Budget": 2000000,
        "ProjectStartDate": "04/19/2017",
        "ProjectEndDate": "07/30/2017",
        "ReceivedAmount": 120000,
        "ProjectCurrency": "USD",
        "Status": true
    }
];


//JournalCode
let journalCodes: JournalCode[] = [
    {
        "ID": 1,
        "JournalName": "Journal 1"
    },
    {
        "ID": 2,
        "JournalName": "Journal 2"
    },
    {
        "ID": 3,
        "JournalName": "Journal 3"
    },
    {
        "ID": 4,
        "JournalName": "Journal 4"
    },
];

//AccountType
let accountTypes: AccountType[] = [
    {
        "ID": 1,
        "AccountTypeName": "Other Account"
    },
    {
        "ID": 2,
        "AccountTypeName": "Expandable"
    },
    {
        "ID": 3,
        "AccountTypeName": "Non Expandable"
    },
];

export class CurrencyData{
    CurrencyId: string;
    CurrencyCode: string;
    CurrencyName: string;
    CurrencyRate: DoubleRange;
}

let currencydata: CurrencyData = {
    "CurrencyId": "",
    "CurrencyCode": "",
    "CurrencyName": "",
    "CurrencyRate": null
};

export class OfficeData{
    OfficeId : any;
    OfficeCode : string;
    OfficeName : string;
    SupervisorName : string;
    PhoneNo : string;
    FaxNo : string;
}

let officedata: OfficeData ={
    "OfficeId" : "",
    "OfficeCode" : "",
    "OfficeName" : "",
    "SupervisorName" : "",
    "PhoneNo" : "",
    "FaxNo" : ""
}

export class EmailSettingData{
    EmailId : any;
    SenderEmail : string;
    EmailTypeId : any;
    EmailTypeName: string;
    SenderPassword : string;
    SmtpPort : any;
    SmtpServer : string;
    EnableSSL : boolean;
}

let emailsetting: EmailSettingData = {
    "EmailId" : "",
    "SenderEmail" : "",
    "EmailTypeId" : "",
    "EmailTypeName" : "",
    "SenderPassword" : "",
    "SmtpPort" : "",
    "SmtpServer" : "",
    "EnableSSL" : false
}

@Injectable()
export class CodeService {

    constructor(private http: Http) {}

    //Manage Chat of account

    //chartOfAccounts
    getChartOfAccountLevels() {
        return chartOfAccountLevels;
    }
    getAccountTypeDropdown() {
        return accountTypeDropdowns;
    }
    getAccountLevelDropdowns() {
        return accountLevelDropdowns;
    }

    //analyticalCodes
    getAnalyticalCodes() {
        return analyticalCodes;
    }
    //analyticalCodes --> Project Tab-5
    getProjectTabs() {
        return projectTabs;
    }


    //JournalCodes
    getJournalCodes() {
        return journalCodes;
    }
    //Accoutn Type
    getAccountTypes() {
        return accountTypes;
    }



    getCurrencyData() : CurrencyData
    {
        currencydata.CurrencyId = "";
        currencydata.CurrencyCode = "";
        currencydata.CurrencyName = "";
        currencydata.CurrencyRate = null;
        return currencydata;
    }

    GetAllCodeList(url: string) 
    {
        //debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        let options = new RequestOptions({ headers: Myheaders });
        return this.http.get(url, options)
            .map((response: Response) => {
                let codelist = response.json();
                if (codelist) {
                    return codelist;
                }
            }).catch(this.handleError); 
    }

    AddEditCurrencyCode(url: string, model: CurrencyCode) {
        //debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });
        
        let a=new RequestOptions();
        let b=
        {
            CurrencyId : model.CurrencyId,
            CurrencyCode : model.CurrencyCode,
            CurrencyName : model.CurrencyName,
            CurrencyRate : model.CurrencyRate        
        }
                
        return this.http.post(url, JSON.stringify(b)
        ,options)            
        .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    getOfficeData() : OfficeData
    {
        officedata.OfficeId = "";
        officedata.OfficeCode = "";
        officedata.OfficeName = "";
        officedata.SupervisorName = "";
        officedata.PhoneNo = "";
        officedata.FaxNo = "";
        return officedata;
    }

    AddEditOfficeCode(url: string, model: OfficeCode) {
        //debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });
        
        let a=new RequestOptions();
        let b=
        {
            OfficeId : model.OfficeId,
            OfficeCode : model.OfficeCode,
            OfficeName : model.OfficeName,
            SupervisorName : model.SupervisorName,
            PhoneNo : model.PhoneNo,
            FaxNo : model.FaxNo
        }
                
        return this.http.post(url, JSON.stringify(b)
        ,options)            
        .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    DeleteOfficeCode(url: string, model: OfficeCodefordelete) {
        //debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });
        
        let a=new RequestOptions();
        let b=
        {
            OfficeId : model.OfficeId
        }
                
        return this.http.post(url, JSON.stringify(b)
        ,options)            
        .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }


    getEmailSettingData() : EmailSettingData
    {
        emailsetting.EmailId = "";
        emailsetting.SenderEmail = "";
        emailsetting.EmailTypeId = "";
        emailsetting.EmailTypeName = "";
        emailsetting.SenderPassword = "";
        emailsetting.SmtpPort = "";
        emailsetting.SmtpServer = "";
        emailsetting.EnableSSL = false;
        return emailsetting;
    }

    AddEditEmailSetting(url: string, model: EmailSetting) {
        debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });
        
        let a=new RequestOptions();
        let b=
        {
            EmailId : model.EmailId,
            SenderEmail : model.SenderEmail,
            EmailTypeName : model.EmailTypeName,
            EmailTypeId : model.EmailTypeId,
            SenderPassword : model.SenderPassword,
            SmtpPort : model.SmtpPort,
            SmtpServer : model.SmtpServer,
            EnableSSL : model.EnableSSL       
        }
                
        return this.http.post(url, JSON.stringify(b)
        ,options)            
        .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    private handleError(error: Response) 
        {        
            console.log(error.json());
            return Observable.throw(error.json().error || 'Server error');
    
        }
}