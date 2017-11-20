import { Injectable } from '@angular/core';

//chartOfAccounts
export class ChartOfAccount {
    ID: number;
    AccountCode: number;
    AccountName: string;
    AccountType: string;
    AccountLevel: string;
}

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

@Injectable()
export class CodeService {
    //Manage Chat of account

    //chartOfAccounts
    getChartOfAccounts() {
        return chartOfAccounts;
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
}