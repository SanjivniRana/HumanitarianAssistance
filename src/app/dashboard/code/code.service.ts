import { Injectable } from '@angular/core';

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

@Injectable()
export class CodeService {
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
    getJournalCodes() {
        return journalCodes;
    }
    //Accoutn Type
    getAccountTypes() {
        return accountTypes;
    }
}