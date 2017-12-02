import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
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
    AccountTypeId: number;
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

//chartOfAccounts
// let accountTypeDropdowns: string[] = [
//     'Expandable', 'Non Expandable', 'Other'];

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


export class CurrencyData {
    CurrencyId: any;
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

export class OfficeData {
    OfficeId: any;
    OfficeCode: string;
    OfficeName: string;
    SupervisorName: string;
    PhoneNo: string;
    FaxNo: string;
}

let officedata: OfficeData = {
    "OfficeId": "",
    "OfficeCode": "",
    "OfficeName": "",
    "SupervisorName": "",
    "PhoneNo": "",
    "FaxNo": ""
}

export class EmailSettingData {
    EmailId: any;
    SenderEmail: string;
    EmailTypeId: any;
    EmailTypeName: string;
    SenderPassword: string;
    SmtpPort: any;
    SmtpServer: string;
    EnableSSL: boolean;
}

let emailsetting: EmailSettingData = {
    "EmailId": "",
    "SenderEmail": "",
    "EmailTypeId": "",
    "EmailTypeName": "",
    "SenderPassword": "",
    "SmtpPort": "",
    "SmtpServer": "",
    "EnableSSL": false
}

export class JournalCodeData {
    JournalCode: any;
    JournalName: string;
}

let journalcodedata = {
    "JournalCode": "",
    "JournalName": ""
}

export class DeleteJournalCode {
    JournalCode: any;
}
let deletejournalcode: DeleteJournalCode = {
    "JournalCode": ""
}

//Alpit 28-11-17
export class AccountLevel {
    ID: number;
    AccountLevelName: string;
}

let accountLevels: AccountLevel[] = [
    {
        "ID": 1,
        "AccountLevelName": "Main Level Account"
    },
    {
        "ID": 2,
        "AccountLevelName": "Control Level Account"
    },
    {
        "ID": 3,
        "AccountLevelName": "Sub Level Account"
    },
    {
        "ID": 4,
        "AccountLevelName": "Input Level Account"
    }
];

@Injectable()
export class CodeService {

    constructor(private http: Http) { }

    //Account level dropdown
    getAccountLevels() {
        return accountLevels;
    }
    //Manage Chat of account

    //chartOfAccounts
    getChartOfAccountLevels() {
        return chartOfAccountLevels;
    }

    //Dropdown for main level account
    getAccountType(url: string) {
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

    getCurrencyData(): CurrencyData {
        currencydata.CurrencyId = "";
        currencydata.CurrencyCode = "";
        currencydata.CurrencyName = "";
        currencydata.CurrencyRate = null;
        return currencydata;
    }

    GetAllCodeList(url: string) {
        //debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        let options = new RequestOptions({ headers: Myheaders });
        return this.http.get(url, options)
            .map((response: Response) => {
                let codelist = response.json();
                if (codelist) {
                    debugger;
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

        let a = new RequestOptions();
        let b =
            {
                CurrencyId: model.CurrencyId,
                CurrencyCode: model.CurrencyCode,
                CurrencyName: model.CurrencyName,
                CurrencyRate: model.CurrencyRate
            }

        return this.http.post(url, JSON.stringify(b)
            , options)
            .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    getOfficeData(): OfficeData {
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

        let a = new RequestOptions();
        let b =
            {
                OfficeId: model.OfficeId,
                OfficeCode: model.OfficeCode,
                OfficeName: model.OfficeName,
                SupervisorName: model.SupervisorName,
                PhoneNo: model.PhoneNo,
                FaxNo: model.FaxNo
            }

        return this.http.post(url, JSON.stringify(b)
            , options)
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

        let a = new RequestOptions();
        let b =
            {
                OfficeId: model.OfficeId
            }

        return this.http.post(url, JSON.stringify(b)
            , options)
            .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }


    getEmailSettingData(): EmailSettingData {
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

        let a = new RequestOptions();
        let b =
            {
                EmailId: model.EmailId,
                SenderEmail: model.SenderEmail,
                EmailTypeName: model.EmailTypeName,
                EmailTypeId: model.EmailTypeId,
                SenderPassword: model.SenderPassword,
                SmtpPort: model.SmtpPort,
                SmtpServer: model.SmtpServer,
                EnableSSL: model.EnableSSL
            }

        return this.http.post(url, JSON.stringify(b)
            , options)
            .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    AddEditJournalCode(url: string, model: JournalCodeData) {
        debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });

        let a = new RequestOptions();
        let b =
            {
                JournalCode: model.JournalCode,
                JournalName: model.JournalName
            }

        return this.http.post(url, JSON.stringify(b)
            , options)
            .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    DeleteJournalCode(url: string, model: DeleteJournalCode) {
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });

        let a = new RequestOptions();
        let b =
            {
                JournalCode: model.JournalCode
            }

        return this.http.post(url, JSON.stringify(b)
            , options)
            .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    //MainLevelAccount ---------- Alpit 30-11-2017
    getMainLevelAccounts(url: string) {
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


    //Add MainLevelAccount ---------- Alpit 30-11-2017
    AddMainLevelAccount(url: string, model: any) {
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });
        let obj =
            {
                AccountName: model.AccountName,
                AccountLevelId: model.AccountLevelId,
                AccountTypeId: model.AccountTypeId,
                AccountTypeName: model.AccountTypeName,
                ParentID: model.ParentID,
                DepRate: model.DepRate,
                DepMethod: model.DepMethod,
                AccountNote: model.AccountNote,
                MDCode: model.MDCode,
                Show: model.Show
            }
        return this.http.post(url, JSON.stringify(obj)
            , options)
            .map((response: Response) => {
                let chartOfAccount = response.json();
                if (chartOfAccount) {
                    return chartOfAccount;
                }
            }).catch(this.handleError);

    }

    //Edit ChartOfAccountDetail---------- Alpit 2-12-2017    
    EditChartOfAccountDetail(url: string, model: any) {
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });
        let obj = null;
        if (model.ParentID == 0) {
            obj =
                {
                    AccountName: model.AccountName,
                    AccountCode: model.AccountCode,
                    AccountTypeId: model.AccountTypeId,
                    AccountLevelId: model.AccountLevelId + 1,
                    ParentID: model.ParentID + 1,
                    // AccountTypeId: model.AccountTypeId,
                    // AccountTypeName: model.AccountTypeName,
                    // ParentID: model.ParentID,
                    // DepRate: model.DepRate,
                    // DepMethod: model.DepMethod,
                    // AccountNote: model.AccountNote,
                    // MDCode: model.MDCode,
                    // Show: model.Show
                }
        }
        else {
            obj =
                {
                    AccountName: model.AccountName,
                    AccountCode: model.AccountCode,
                    AccountTypeId: model.AccountTypeId,
                    AccountLevelId: model.AccountLevelId,
                    ParentID: model.ParentID,
                    // AccountTypeId: model.AccountTypeId,
                    // AccountTypeName: model.AccountTypeName,
                    // ParentID: model.ParentID,
                    // DepRate: model.DepRate,
                    // DepMethod: model.DepMethod,
                    // AccountNote: model.AccountNote,
                    // MDCode: model.MDCode,
                    // Show: model.Show
                }
        }
        return this.http.post(url, JSON.stringify(obj)
            , options)
            .map((response: Response) => {
                let chartOfAccount = response.json();
                if (chartOfAccount) {
                    return chartOfAccount;
                }
            }).catch(this.handleError);

    }



    getJournalCodeData(): JournalCodeData {
        journalcodedata.JournalCode = "";
        journalcodedata.JournalName = "";
        return journalcodedata;
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');

    }
}


export class EditChartOfAccount {
    AccountCode: number;
    AccountName: string;
    AccountTypeId: number;
}


//MainLevelAccount     ---important
export class MainLevelAccount {
    ParentID: number;
    AccountLevelId: number;
    AccountTypeName: "Main Level Accounts";
    AccountNote: number;
    AccountName: string;
    AccountTypeId: number;
    Show: boolean;
    MDCode: string;
    DepMethod: string;
    DepRate: number;
}

//ControlLevelAccount     ---important
export class ControlLevelAccount {
    ParentID: number;
    AccountLevelId: number;
    AccountTypeName: "Control Level Accounts";
    AccountNote: number;
    MainLevel: number;
    AccountName: string;
    AccountTypeId: number;
    Show: boolean;
    MDCode: string;
}

//SubLevelAccount     ---important
export class SubLevelAccount {
    ParentID: number;
    AccountLevelId: number;
    AccountTypeName: "Sub Level Accounts";
    AccountNote: number;
    MainLevel: number;
    AccountName: string;
    AccountTypeId: number;
    Show: boolean;
    MDCode: string;
}

//InputLevelAccount     ---important
export class InputLevelAccount {
    ParentID: number;
    AccountLevelId: number;
    AccountTypeName: "Input Level Accounts";
    AccountNote: number;
    MainLevel: number;
    AccountName: string;
    AccountTypeId: number;
    Show: boolean;
    MDCode: string;
}


//MainLevelAccount
export class chartOfAccountsData {
    ID: number;
    ParentID: number;
    AccountName: string;
    AccountCode: number;
    AccountTypeId: number;
    AccountLevelId: number;
}

//MainLevelAccount
// var mainLevelAccounts: MainLevelAccount[] = [
//     {
//         "ID": 1,
//         "ParentID": 0,
//         "AccountCode": 1,
//         "AccountName": "Endownment",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 2,
//         "ParentID": 0,
//         "AccountCode": 2,
//         "AccountName": "Assets",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 3,
//         "ParentID": 0,
//         "AccountCode": 3,
//         "AccountName": "Liabilities",
//         "AccountType": "Expandables",
//     },
//     {
//         "ID": 4,
//         "ParentID": 0,
//         "AccountCode": 4,
//         "AccountName": "Fund/Reserves",
//         "AccountType": "Non Expandables",
//     },
//     {
//         "ID": 5,
//         "ParentID": 0,
//         "AccountCode": 5,
//         "AccountName": "Main Expenses",
//         "AccountType": "Other",
//     },

//     //1
//     {
//         "ID": 6,
//         "ParentID": 1,
//         "AccountCode": 11,
//         "AccountName": "Endownment A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 7,
//         "ParentID": 1,
//         "AccountCode": 21,
//         "AccountName": "Asset A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 8,
//         "ParentID": 1,
//         "AccountCode": 31,
//         "AccountName": "Liabilities A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 9,
//         "ParentID": 1,
//         "AccountCode": 41,
//         "AccountName": "FUNDS A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 10,
//         "ParentID": 1,
//         "AccountCode": 43,
//         "AccountName": "Reserves A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 11,
//         "ParentID": 1,
//         "AccountCode": 51,
//         "AccountName": "EXPENSES A",
//         "AccountType": "Other",
//     },



//     //2
//     {
//         "ID": 12,
//         "ParentID": 2,
//         "AccountCode": 21,
//         "AccountName": "Asset A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 13,
//         "ParentID": 2,
//         "AccountCode": 31,
//         "AccountName": "Liabilities A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 14,
//         "ParentID": 2,
//         "AccountCode": 41,
//         "AccountName": "FUNDS A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 15,
//         "ParentID": 2,
//         "AccountCode": 43,
//         "AccountName": "Reserves A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 16,
//         "ParentID": 2,
//         "AccountCode": 51,
//         "AccountName": "EXPENSES A",
//         "AccountType": "Other",
//     },

//     //3
//     {
//         "ID": 17,
//         "ParentID": 3,
//         "AccountCode": 21,
//         "AccountName": "Asset A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 18,
//         "ParentID": 3,
//         "AccountCode": 31,
//         "AccountName": "Liabilities A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 19,
//         "ParentID": 3,
//         "AccountCode": 41,
//         "AccountName": "FUNDS A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 20,
//         "ParentID": 3,
//         "AccountCode": 43,
//         "AccountName": "Reserves A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 21,
//         "ParentID": 3,
//         "AccountCode": 51,
//         "AccountName": "EXPENSES A",
//         "AccountType": "Other",
//     },


//     //4
//     {
//         "ID": 22,
//         "ParentID": 4,
//         "AccountCode": 21,
//         "AccountName": "Asset A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 23,
//         "ParentID": 4,
//         "AccountCode": 31,
//         "AccountName": "Liabilities A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 24,
//         "ParentID": 4,
//         "AccountCode": 41,
//         "AccountName": "FUNDS A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 25,
//         "ParentID": 4,
//         "AccountCode": 43,
//         "AccountName": "Reserves A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 26,
//         "ParentID": 4,
//         "AccountCode": 51,
//         "AccountName": "EXPENSES A",
//         "AccountType": "Other",
//     },



//     //5
//     {
//         "ID": 27,
//         "ParentID": 5,
//         "AccountCode": 21,
//         "AccountName": "Asset A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 28,
//         "ParentID": 5,
//         "AccountCode": 31,
//         "AccountName": "Liabilities A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 29,
//         "ParentID": 5,
//         "AccountCode": 41,
//         "AccountName": "FUNDS A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 30,
//         "ParentID": 5,
//         "AccountCode": 43,
//         "AccountName": "Reserves A",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 31,
//         "ParentID": 5,
//         "AccountCode": 51,
//         "AccountName": "EXPENSES A",
//         "AccountType": "Other",
//     },


//     // 1 - 1
//     {
//         "ID": 32,
//         "ParentID": 6,
//         "AccountCode": 4101,
//         "AccountName": "Income F",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 33,
//         "ParentID": 6,
//         "AccountCode": 4102,
//         "AccountName": "Income E",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 34,
//         "ParentID": 6,
//         "AccountCode": 4103,
//         "AccountName": "Income D",
//         "AccountType": "Non Expandable",
//     },
//     {
//         "ID": 35,
//         "ParentID": 6,
//         "AccountCode": 4104,
//         "AccountName": "Income V",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 36,
//         "ParentID": 6,
//         "AccountCode": 5101,
//         "AccountName": "Expense J",
//         "AccountType": "Expandable",
//     },
//     {
//         "ID": 37,
//         "ParentID": 6,
//         "AccountCode": 5102,
//         "AccountName": "Expense K",
//         "AccountType": "Expandable",
//     },
//     {
//         "ID": 38,
//         "ParentID": 6,
//         "AccountCode": 5103,
//         "AccountName": "Expense L",
//         "AccountType": "Expandable",
//     },
//     {
//         "ID": 39,
//         "ParentID": 6,
//         "AccountCode": 5104,
//         "AccountName": "Expense M",
//         "AccountType": "Expandable",
//     },
//     {
//         "ID": 40,
//         "ParentID": 6,
//         "AccountCode": 5104,
//         "AccountName": "Expense N",
//         "AccountType": "Expandable",
//     },


//     // 1 - 1 - 1
//     {
//         "ID": 41,
//         "ParentID": 32,
//         "AccountCode": 410101,
//         "AccountName": "Clinical Income",
//         "AccountType": "Other",
//     },
//     {
//         "ID": 42,
//         "ParentID": 32,
//         "AccountCode": 410102,
//         "AccountName": "Medical Income",
//         "AccountType": "Expandable",
//     },


// ];



