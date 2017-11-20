import { Injectable } from '@angular/core';

export class ChartOfAccount {
    ID: number;
    AccountCode: number;
    AccountName: string;
    AccountType: string;
    AccountLevel: string;
}


// export class AccountLevelDropdowns {
//     ID: number;
//     AccountLevel: string;
// }



// let accountTypeDropdowns: AccountTypeDropdown[] = [
//     {
//         "ID": 1,
//         "AccountType": "Expandable"
//     },
//     {
//         "ID": 2,
//         "AccountType": "Non Expandable"
//     },
//     {
//         "ID": 3,
//         "AccountType": "Other"
//     }
// ];


// let accountLevelDropdowns: AccountLevelDropdowns[] = [
//     {
//         "ID": 1,
//         "AccountLevel": "Main level"
//     },
//     {
//         "ID": 2,
//         "AccountLevel": "Control level"
//     },
//     {
//         "ID": 3,
//         "AccountLevel": "Sub level"
//     },
//     {
//         "ID": 4,
//         "AccountLevel": "Input level"
//     }
// ];

let accountTypeDropdowns: string[] = [
    'Expandable', 'Non Expandable', 'Other'];

let accountLevelDropdowns: string[] = [
    'Main level', 'Control level', 'Sub level', 'Input level'];


let chartOfAccounts: ChartOfAccount[] = [
    {
        "ID": 1,
        "AccountCode": 1,
        "AccountName": "Saving",
        "AccountType": "Other Account",
        "AccountLevel": "Main Level"
    },
    {
        "ID": 2,
        "AccountCode": 2,
        "AccountName": "Current",
        "AccountType": "Expandable",
        "AccountLevel": "Control Level"
    },
    {
        "ID": 3,
        "AccountCode": 3,
        "AccountName": "Other",
        "AccountType": "Expandable",
        "AccountLevel": "Sub Level"
    },
    {
        "ID": 4,
        "AccountCode": 4,
        "AccountName": "Current",
        "AccountType": "Non Expandable",
        "AccountLevel": "Input Level"
    },

];

@Injectable()
export class CodeService {
    //Manage Chat of account
    getChartOfAccounts() {
        return chartOfAccounts;
    }
    getAccountTypeDropdown() {
        return accountTypeDropdowns;
    }
    getAccountLevelDropdowns() {
        return accountLevelDropdowns;
    }
}