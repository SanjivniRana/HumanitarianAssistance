import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export class JournalClass {
    "ID": number;
    "Journal": string;
    "VoucherNo": number;
    "Description": string;
    "Date": string;
    "Credit": number;
    "Debit": number;
    "ParentID": number;
    "AccountNo": string;
}

let journalData: JournalClass[] = [
    {
        "ID": 1,
        "ParentID": 0,
        "Journal": "Journal1",
        "VoucherNo": null,
        "Description": null,
        "Date": null,
        "Credit": null,
        "Debit": null,
        "AccountNo": null
    },
    //Voucher Inside
    {
        "ID": 2,
        "ParentID": 1,
        "Journal": "1223",
        "VoucherNo": 1,
        "Description": null,
        "Date": "2017/11/27",
        "Credit": null,
        "Debit": null,
        "AccountNo": null
    },
    //Transaction Inside
    {
        "ID": 3,
        "ParentID": 2,
        "Journal": null,
        "VoucherNo": 1,
        "Description": "Transaction Description",
        "Date": "2017/11/27",
        "Credit": 30000,
        "Debit": 0,
        "AccountNo": "410101"
    },
    {
        "ID": 4,
        "ParentID": 2,
        "Journal": null,
        "VoucherNo": 1,
        "Description": "Transaction Description",
        "Date": "2017/11/27",
        "Credit": 0,
        "Debit": 30000,
        "AccountNo": "510101"
    },
    {
        "ID": 5,
        "ParentID": 2,
        "Journal": null,
        "VoucherNo": 1,
        "Description": "Transaction Description",
        "Date": "2017/11/27",
        "Credit": 0,
        "Debit": 10000,
        "AccountNo": "410102"
    },
    {
        "ID": 50,
        "ParentID": 2,
        "Journal": null,
        "VoucherNo": 1,
        "Description": "Transaction Description",
        "Date": "2017/11/27",
        "Credit": 10000,
        "Debit": 0,
        "AccountNo": "410103"
    },
    //Transaction Inside Ends

    //Second Journal
    {
        "ID": 6,
        "ParentID": 0,
        "Journal": "Journal2",
        "VoucherNo": null,
        "Description": null,
        "Date": null,
        "Credit": null,
        "Debit": null,
        "AccountNo": null
    },
    {
        "ID": 7,
        "ParentID": 6,
        "Journal": "Journal2",
        "VoucherNo": 2,
        "Description": null,
        "Date": "2017/11/26",
        "Credit": null,
        "Debit": null,
        "AccountNo": null
    },
    {
        "ID": 8,
        "ParentID": 7,
        "Journal": "Journal2",
        "VoucherNo": 2,
        "Description": null,
        "Date": "2017/11/26",
        "Credit": 0,
        "Debit": 30000,
        "AccountNo": "410103"
    },
    {
        "ID": 9,
        "ParentID": 7,
        "Journal": "Journal2",
        "VoucherNo": 2,
        "Description": null,
        "Date": "2017/11/26",
        "Credit": 0,
        "Debit": 30000,
        "AccountNo": "410103"
    },
    {
        "ID": 10,
        "ParentID": 7,
        "Journal": "Journal2",
        "VoucherNo": 2,
        "Description": null,
        "Date": "2017/11/26",
        "Credit": 0,
        "Debit": 30000,
        "AccountNo": "410103"
    }
];
// Vouchers Listing,add, edit Class
export class VoucherClass {
    ID: number;
    VoucherNo: string;
    VoucherDate: string;
    VoucherRefNo: string;
    Office: string;
    Journal: string;
    Description: string;
    Currency: string;
    ChequeNo?: string;
    VoucherType?: string;
}

let voucherClass: VoucherClass[] = [{
    "ID": 1,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "02bb51f0-da81-416b-ad3a-a82b0145b279"
}, {
    "ID": 2,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "04ec2879-5af5-4446-a3a5-a83100d77eb6"
}, {
    "ID": 4,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "329bc74b-5a6a-431e-a329-a83100ccf00f"
}, {
    "ID": 5,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "329bc74b-5a6a-431e-a329-a83100ccf00f"
}, {
    "ID": 7,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "329bc74b-5a6a-431e-a329-a83100ccf00f"
}, {
    "ID": 9,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "329bc74b-5a6a-431e-a329-a83100ccf00f"
}];

export class Document {
    ID: any;
    DocumentName: string;
    DocumentFilePath?: string;
    DocumentDate?: string;
    VoucherNo?: string;
}

let addDocument: Document =
    {
        "ID": "",
        "DocumentName": "",
        "DocumentFilePath": "",
        "DocumentDate": "",
        "VoucherNo": ""
    };

let documentData: Document[] = [{
    "ID": 1,
    "DocumentName": "Document 1"
}, {
    "ID": 2,
    "DocumentName": "Document 2"
}, {
    "ID": 3,
    "DocumentName": "Document 3"
}];

export class Voucher {
    ID: number;
    Date: string;
    ACNO: string;
    TransactionDescription: string;
    Debit: number;
    Credit: number;
    Currency: string;
    BL: string;
    Area: string;
    Sector: string;
    Program: string;
    Project: string;
    Job: string;
}

export class Employee1 {
    ID: number;
    Journal: string;
    Office: string;
    Currency: string;
    RecordType: string;
    Accounts: string;
    Status: string;
    ReportDate: string;
    Vouchers: Voucher[];
}

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    Picture: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
}

export class LedgerClass {
    ID: number;
    Currency: string;
    Account: string;
    RecordType: string;
    Status: string;
    VoucherDate: string;
    LedgerVouchers: LedgerVoucher[];
}

export class LedgerVoucher {
    ID: number;
    Date: string;
    Voucher: string;
    LineItemDescription: string;
    Debit: number;
    Credit: number;
    Currency: string;
    Status: string;
}


export class Customer {
    Login: string;
    Password: string;
    Name: string;
    Date: Date;
    Country: string;
    City: string;
    Address: string;
    Phone: string;
    Accepted: boolean;
}

export class Currency {
    ID: number;
    Name: string;
}

let currencies: Currency[] = [
    {
        "ID": 1,
        "Name": "USD"
    },
    {
        "ID": 2,
        "Name": "EUR"
    },
    {
        "ID": 3,
        "Name": "AUD"
    },
    {
        "ID": 4,
        "Name": "JPY"
    },
    {
        "ID": 5,
        "Name": "AFG-AFG"
    }
];

let customer: Customer = {
    "Login": "",
    "Password": "",
    "Name": "Peter",
    "Date": null,
    "Country": "",
    "City": "",
    "Address": "",
    "Phone": "",
    "Accepted": false
};

let countries: string[] = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The   Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Democratic Republic of the Congo', 'Republic of the Congo', 'Costa Rica', 'Ivory Coast', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Republic of Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Republic of Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Federated States of Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Kingdom of the Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'State of Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
let countries1: any[] = [{
    "Id": 1,
    "Country": "India"
},
{
    "Id": 2,
    "Country": "USA"
},
{
    "Id": 3,
    "Country": "UK"
}];

//DATA FOR DOCUMENT PAGE
export class Company {
    ID: number;
    DocumentName: string;
}

let companies: Company[] = [{
    "ID": 1,
    "DocumentName": "Document 1"
}, {
    "ID": 2,
    "DocumentName": "Document 2"
}, {
    "ID": 3,
    "DocumentName": "Document 3"
}];
//DATA FOR DOCUMENT PAGE ENDS

let employees: Employee1[] = [{
    "ID": 1,
    "Journal": "Journal",
    "Office": "A0001",
    "RecordType": "Single Currency",
    "Currency": "AFG-AFG",
    "Accounts": "CEO",
    "Status": "All",
    "ReportDate": "1964/03/16",
    "Vouchers": [{

        "ID": 4,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 10000,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""

    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {

        "ID": 4,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 50000,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""

    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 8000,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    }]
},
{
    "ID": 2,
    "Journal": "Journal2",
    "Office": "A0001",
    "RecordType": "Single Currency",
    "Currency": "USD-USD",
    "Accounts": "CEO",
    "Status": "All",
    "ReportDate": "1964/03/16",
    "Vouchers": [{

        "ID": 4,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 10000,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""

    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {

        "ID": 4,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 50000,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""

    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    },
    {
        "ID": 5,
        "Date": "11/02/2017",
        "ACNO": "410201",
        "TransactionDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 8000,
        "Currency": "AFG-AFG",
        "BL": "",
        "Area": "",
        "Sector": "",
        "Program": "",
        "Project": "",
        "Job": ""
    }
    ]
}
];

//Data for LEDGER STATEMENT

let ledgers: LedgerClass[] = [{
    "ID": 1,
    "Currency": "USD-USD",
    "Account": "410101 - Clinic Income",
    "RecordType": "Single Currency",
    "Status": "All",
    "VoucherDate": "1966/03/16",
    "LedgerVouchers": [{
        "ID": 4,
        "Date": "11/03/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 10000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/04/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/05/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 50000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/06/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 8000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    }]
}, {
    "ID": 2,
    "Currency": "USD-USD",
    "Account": "410102 - Sports Income",
    "RecordType": "Single Currency",
    "Status": "All",
    "VoucherDate": "1968/03/16",
    "LedgerVouchers": [{
        "ID": 4,
        "Date": "11/03/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 10000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/04/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/05/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 50000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/06/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0.00,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0,
        "Credit": 8000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    }]
},
{
    "ID": 3,
    "Currency": "USD-USD",
    "Account": "410102 - Medical Income",
    "RecordType": "Single Currency",
    "Status": "All",
    "VoucherDate": "2000/03/16",
    "LedgerVouchers": [{
        "ID": 4,
        "Date": "11/03/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0,
        "Credit": 10000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/04/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/05/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0,
        "Credit": 50000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/06/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0,
        "Currency": "AFG-AFG",
        "Status": "Active"
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0,
        "Credit": 8000,
        "Currency": "AFG-AFG",
        "Status": "Active"
    }]
}
];

//Trail Balance Class 
export class TrailBalanceClass {
    ID: number;
    Currency: string;
    Account: string;
    Office: string;
    RecordType: string;
    VoucherDate: string;
    TrailBalanceVouchers: TrailBalanceVoucher[];
}

export class TrailBalanceVoucher {
    ID: number;
    AccountName: string;
    Debit: number;
    Credit: number;
}

let trial: TrailBalanceClass[] = [
    {
        "ID": 1,
        "Currency": "AFG-AFG",
        "Account": "410101 - Clinic Income",
        "Office": "TestOffice",
        "RecordType": "Single Currency",
        "VoucherDate": "1966/03/16",
        "TrailBalanceVouchers": [{
            "ID": 4,
            "AccountName": "410201",
            "Debit": 0,
            "Credit": 10000
        },
        {
            "ID": 5,
            "AccountName": "410101 - Clinical Income",
            "Debit": 0,
            "Credit": 50000
        },
        {
            "ID": 6,
            "AccountName": "410102 - Sports Income",
            "Debit": 0,
            "Credit": 8000
        },
        {
            "ID": 7,
            "AccountName": "410103 - Medical Income",
            "Debit": 10000,
            "Credit": 0
        },
        {
            "ID": 8,
            "AccountName": "410103 - Director Income",
            "Debit": 50000,
            "Credit": 0
        },
        {
            "ID": 7,
            "AccountName": "410103 - Medical Income",
            "Debit": 3000,
            "Credit": 0
        },
        {
            "ID": 8,
            "AccountName": "410103 - Director Income",
            "Debit": 5000,
            "Credit": 0
        }]

    },
    {
        "ID": 2,
        "Currency": "USD-USD",
        "Account": "410101 - Medical Income",
        "Office": "TestOffice",
        "RecordType": "Single Currency",
        "VoucherDate": "1964/03/16",
        "TrailBalanceVouchers": [{
            "ID": 4,
            "AccountName": "410201",
            "Debit": 0,
            "Credit": 10000
        },
        {
            "ID": 5,
            "AccountName": "410101 - Clinical Income",
            "Debit": 0,
            "Credit": 50000
        },
        {
            "ID": 6,
            "AccountName": "410102 - Sports Income",
            "Debit": 0,
            "Credit": 8000
        },
        {
            "ID": 7,
            "AccountName": "410103 - Medical Income",
            "Debit": 10000,
            "Credit": 0
        },
        {
            "ID": 8,
            "AccountName": "410103 - Director Income",
            "Debit": 50000,
            "Credit": 0
        },
        {
            "ID": 7,
            "AccountName": "410103 - Medical Income",
            "Debit": 3000,
            "Credit": 0
        },
        {
            "ID": 8,
            "AccountName": "410103 - Director Income",
            "Debit": 5000,
            "Credit": 0
        }]

    }];
// TRIAL BALANCE ENDS 



//FOR ADVANCE DEDUCTION 

export class AdvanceDeductionClass {
    ID: number;
    Currency: string;
    Office: string;
    Month: string;
    AdvanceDeductionSalarys: AdvanceDeductionSalary[];
}

export class AdvanceDeductionSalary {
    ID: number;
    EmployeeName: string;
    NetSalaryAdvance: number;
    AdvanceDeduction: number;
    NetSalary: number;
}

let advanceDeduction: AdvanceDeductionClass[] = [{
    "ID": 1,
    "Currency": "AFG-AFG",
    "Office": "TestOffice",
    "Month": "2017/11/17",
    "AdvanceDeductionSalarys": [{
        "ID": 4,
        "EmployeeName": "Naval Bhatt",
        "NetSalaryAdvance": 50000,
        "AdvanceDeduction": 10000,
        "NetSalary": 40000,
    },
    {
        "ID": 4,
        "EmployeeName": "Fuster Cluck",
        "NetSalaryAdvance": 60000,
        "AdvanceDeduction": 10000,
        "NetSalary": 50000,
    },
    {
        "ID": 4,
        "EmployeeName": "Hamza",
        "NetSalaryAdvance": 70000,
        "AdvanceDeduction": 40000,
        "NetSalary": 30000,
    }]

},
{
    "ID": 2,
    "Currency": "USD-USD",
    "Office": "TestOffice1",
    "Month": "2017/11/18",
    "AdvanceDeductionSalarys": [{
        "ID": 5,
        "EmployeeName": "Rohit Grover",
        "NetSalaryAdvance": 50000,
        "AdvanceDeduction": 10000,
        "NetSalary": 40000,
    },
    {
        "ID": 5,
        "EmployeeName": "Bipul",
        "NetSalaryAdvance": 60000,
        "AdvanceDeduction": 10000,
        "NetSalary": 50000,
    },
    {
        "ID": 5,
        "EmployeeName": "Shubham",
        "NetSalaryAdvance": 70000,
        "AdvanceDeduction": 40000,
        "NetSalary": 30000,
    },
    {
        "ID": 5,
        "EmployeeName": "Alpit",
        "NetSalaryAdvance": 70000,
        "AdvanceDeduction": 40000,
        "NetSalary": 30000,
    }]

}];

//END ADVANCE DEDUCTION


//FOR Financial-Report 
export class Tab {
    id: number;
    text: string;
}

export class FinancialReport_Notes_of_COAClass {
    ID: number;
    Code: number;
    AccountName: string;
    Notes: number;
}

let financial_notes_of_COAClass: FinancialReport_Notes_of_COAClass[] = [{
    "ID": 1,
    "Code": 3123,
    "AccountName": "Income D",
    "Notes": 18,
},
{
    "ID": 2,
    "Code": 3123,
    "AccountName": "Income D",
    "Notes": 18,
},
{
    "ID": 3,
    "Code": 3123,
    "AccountName": "Income D",
    "Notes": 18,
}];

export class FinancialReport_NotesClass {
    ID: number;
    Code: number;
    Narration: string;
    Notes: number;
    BalanceType: string;
}

let financial_notes: FinancialReport_NotesClass[] = [{
    "ID": 4,
    "Code": 11,
    "Narration": "Reserve Account",
    "Notes": 12,
    "BalanceType": "SUM"
},
{
    "ID": 5,
    "Code": 11,
    "Narration": "Reserve Account",
    "Notes": 12,
    "BalanceType": "SUM"
},
{
    "ID": 6,
    "Code": 11,
    "Narration": "Reserve Account",
    "Notes": 12,
    "BalanceType": "SUM"
}];

export class FinancialReport_BalanceSheetClass {
    ID: number;
    Description: string;
    Notes: number;
    Balance: number;
    Currency: string;
}

let financial_balancesheet: FinancialReport_BalanceSheetClass[] = [{
    "ID": 7,
    "Description": "Donor Funds",
    "Notes": 4,
    "Balance": 9000,
    "Currency": "USD-USD"
},
{
    "ID": 8,
    "Description": "Donor Funds",
    "Notes": 4,
    "Balance": 9000,
    "Currency": "USD-USD"
},
{
    "ID": 9,
    "Description": "Donor Funds",
    "Notes": 4,
    "Balance": 9000,
    "Currency": "AFG-AFG"
}];

export class FinancialReport_IncomeClass {
    ID: number;
    Description: string;
    Notes: number;
    Balance: number;
    Currency: string;
}

let financial_Income: FinancialReport_IncomeClass[] = [{
    "ID": 10,
    "Description": "Currency Exchange Loss",
    "Notes": 15,
    "Balance": 480,
    "Currency": "USD-USD"
},
{
    "ID": 11,
    "Description": "Currency Exchange Loss",
    "Notes": 15,
    "Balance": 480,
    "Currency": "AFG-AFG"
},
{
    "ID": 12,
    "Description": "Currency Exchange Loss",
    "Notes": 15,
    "Balance": 480,
    "Currency": "AFG-AFG"
}];

export class FinancialReport_Details_of_NotesClass {
    ID: number;
    AccountCode: number;
    AccountName: string;
    Notes: number;
    Balance: number;
    Currency: string;
}

let financial_details: FinancialReport_Details_of_NotesClass[] = [{
    "ID": 13,
    "AccountCode": 410201,
    "AccountName": "Sports Income",
    "Notes": 15,
    "Balance": 6000,
    "Currency": "USD-USD"
},
{
    "ID": 14,
    "AccountCode": 410201,
    "AccountName": "Sports Income",
    "Notes": 15,
    "Balance": 6000,
    "Currency": "USD-USD"
},
{
    "ID": 15,
    "AccountCode": 410201,
    "AccountName": "Sports Income",
    "Notes": 15,
    "Balance": 6000,
    "Currency": "AFG-AFG"
}];


let tabs: Tab[] = [
    {
        id: 0,
        text: "Notes in COA"
    },
    {
        id: 1,
        text: "Notes"
    },
    {
        id: 2,
        text: "Balance Sheet"
    },
    {
        id: 3,
        text: "Income/Exp AC"
    },
    {
        id: 4,
        text: "Details Of Notes"
    }
];

//End Financial-Report

//Start Financial Year DropDown
export class FinancialYear {
    ID: number;
    Year: string;
}

let years: FinancialYear[] = [{
    "ID": 1,
    "Year": "2014"
},
{
    "ID": 2,
    "Year": "2015"
},
{
    "ID": 3,
    "Year": "2016"
},
{
    "ID": 4,
    "Year": "2017"
}];
//End Financial Year DropDown

//Start of Budget Balance

export class BudgetBalanceClass {
    ID: number;
    Currency: string;
    Budget: number;
    RecordType: string;
    Date: string;
    BudgetBalance: BudgetBalanceInnerClass[];
}

export class BudgetBalanceInnerClass {
    ID: number;
    BLine: string;
    BLineDescription: string;
    Currency: string;
    Budget: number;
    Expenditure: number;
    Balance: number;
    Percentage: string;
}

let budget: BudgetBalanceClass[] = [{
    "ID": 1,
    "Currency": "USD-USD",
    "Budget": 12000,
    "RecordType": "Single Currency",
    "Date": "2015/03/16",
    "BudgetBalance": [{
        "ID": 4,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "USD-USD",
        "Budget": 12000,
        "Expenditure": 2000,
        "Balance": 10000,
        "Percentage": "83.3333%"
    },
    {
        "ID": 5,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "USD-USD",
        "Budget": 12000,
        "Expenditure": 2000,
        "Balance": 10000,
        "Percentage": "83.3333%"
    },
    {
        "ID": 6,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "USD-USD",
        "Budget": 12000,
        "Expenditure": 2000,
        "Balance": 10000,
        "Percentage": "83.3333%"
    },
    {
        "ID": 7,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "USD-USD",
        "Budget": 12000,
        "Expenditure": 2000,
        "Balance": 10000,
        "Percentage": "83.3333%"
    },
    {
        "ID": 8,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "USD-USD",
        "Budget": 12000,
        "Expenditure": 2000,
        "Balance": 10000,
        "Percentage": "83.3333%"
    }]
}, {
    "ID": 2,
    "Currency": "AFG-AFG",
    "Budget": 10000,
    "RecordType": "Single Currency",
    "Date": "2016/03/16",
    "BudgetBalance": [{
        "ID": 9,
        "BLine": "410201",
        "BLineDescription": "Sports Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 10000,
        "Expenditure": 1000,
        "Balance": 9000,
        "Percentage": "90%"
    },
    {
        "ID": 10,
        "BLine": "410201",
        "BLineDescription": "Sports Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 10000,
        "Expenditure": 1000,
        "Balance": 9000,
        "Percentage": "90%"
    },
    {
        "ID": 11,
        "BLine": "410201",
        "BLineDescription": "Sports Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 10000,
        "Expenditure": 1000,
        "Balance": 9000,
        "Percentage": "90%"
    },
    {
        "ID": 12,
        "BLine": "410201",
        "BLineDescription": "Sports Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 10000,
        "Expenditure": 1000,
        "Balance": 9000,
        "Percentage": "90%"
    },
    {
        "ID": 13,
        "BLine": "410201",
        "BLineDescription": "Sports Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 10000,
        "Expenditure": 1000,
        "Balance": 9000,
        "Percentage": "90%"
    }]
},
{
    "ID": 3,
    "Currency": "USD-USD",
    "Budget": 30000,
    "RecordType": "Single Currency",
    "Date": "2017/03/16",
    "BudgetBalance": [{
        "ID": 14,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 30000,
        "Expenditure": 10000,
        "Balance": 20000,
        "Percentage": "66.666%"
    },
    {
        "ID": 15,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 30000,
        "Expenditure": 10000,
        "Balance": 20000,
        "Percentage": "66.666%"
    },
    {
        "ID": 16,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 30000,
        "Expenditure": 10000,
        "Balance": 20000,
        "Percentage": "66.666%"
    },
    {
        "ID": 17,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 30000,
        "Expenditure": 10000,
        "Balance": 20000,
        "Percentage": "66.666%"
    },
    {
        "ID": 18,
        "BLine": "410201",
        "BLineDescription": "Kabul Clinic Income",
        "Currency": "AFG-AFG",
        "Budget": 30000,
        "Expenditure": 10000,
        "Balance": 20000,
        "Percentage": "66.666%"
    }]
}];

//End of Budget Balance

//Journal
export class Sale {
    id: number;
    journal: string;
    country: string;
    transaction: string;
    voucher: string;
    amount: number;
    transactionType: string;
}

//Journal
let journal: Sale[] = [
    {
        "id": 1,
        "journal": "Journal1",
        "country": "USA",
        "voucher": "Voucher 1",
        "transaction": "transaction 1",
        "amount": 500,
        "transactionType": "Debit"
    }, {
        "id": 2,
        "journal": "Journal1",
        "country": "USA",
        "voucher": "Voucher 1",
        "transaction": "transaction 2",
        "amount": 500,
        "transactionType": "Credit"
    }, {
        "id": 3,
        "journal": "Journal1",
        "country": "USA",
        "voucher": "Voucher 2",
        "transaction": "transaction 3",
        "amount": 1000,
        "transactionType": "Debit"
    }, {
        "id": 4,
        "journal": "Journal1",
        "country": "CAN",
        "voucher": "Voucher 2",
        "transaction": "transaction 1",
        "amount": 1000,
        "transactionType": "Credit"
    }, {
        "id": 5,
        "journal": "Journal2",
        "country": "CAN",
        "voucher": "Voucher 1",
        "transaction": "transaction 2",
        "amount": 880,
        "transactionType": "Debit"
    }, {
        "id": 6,
        "journal": "Journal5",
        "country": "BRA",
        "voucher": "Voucher 1",
        "transaction": "transaction 1",
        "amount": 5260,
        "transactionType": "Credit"
    }
];


@Injectable()
export class AccountsService {
    constructor(private http: Http) {

    }

    getJournalData(): JournalClass[] {
        return journalData;
    }

    getVouchersList(): VoucherClass[] {
        return voucherClass;
    }

    getVouchersDocumentList(): Document[] {
        return documentData;
    }

    getCustomer(): Customer {
        return customer;
    }

    getAddDoucmentModel(): Document {
        addDocument.ID = "";
        addDocument.DocumentName = "";
        addDocument.DocumentFilePath = "";
        addDocument.DocumentDate = "";
        addDocument.VoucherNo = "";
        return addDocument;
    }

    getCountries() {
        return countries;
    }

    getCountries1() {
        return countries1;
    }

    //Document Function 
    getCompanies() {
        return companies;
    }
    getEmployees() {
        return employees;
    }
    getLedger() {
        return ledgers;
    }

    getTrailBalance() {
        return trial;
    }

    getAdvanceDeduction() {
        return advanceDeduction;
    }

    getTabs(): Tab[] {
        return tabs;
    }

    getFinancial_COA() {
        return financial_notes_of_COAClass;
    }

    getFinancial_Notes() {
        return financial_notes;
    }

    getFinancial_BalanceSheet() {
        return financial_balancesheet;
    }

    getFinancial_Income() {
        return financial_Income;
    }

    getFinancial_DetailsNotes() {
        return financial_details;
    }

    getCurrencies() {
        return currencies;
    }

    getFinancialYear_Report() {
        return years;
    }

    getBudgetBalance() {
        return budget;
    }

    GetAllCurrencyCodeList(url: string) {
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

    GetAllOfficeCodeList(url: string) {
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

    GetAllJournalCodeList(url: string) {
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

    GetAllVoucherDetails(url: string) {
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

    AddVoucher(url: string, model: any) {
        debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });        
        let  obj =
        {            
            CurrencyId : model.Currency,
            ChequeNo : model.ChequeNo,
            Description : model.Description,
            JournalCode : model.Journal,
            OfficeId : model.Office,
            VoucherDate : model.VoucherDate,
            ReferenceNo : model.VoucherRefNo,
            VoucherTypeId : model.VoucherType        
        }
                
        return this.http.post(url, JSON.stringify(obj)
        ,options)            
        .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    EditVoucher(url: string, model: any) {
        debugger;
        let Myheaders = new Headers();
        Myheaders.append("Authorization", "Bearer " + localStorage.getItem("authenticationtoken"));
        Myheaders.append("Content-Type", "application/json");
        let options = new RequestOptions({ headers: Myheaders });        
        let  obj =
        {            
            VoucherNo : model.VoucherNo,
            CurrencyId : model.Currency,
            ChequeNo : model.ChequeNo,
            Description : model.Description,
            JournalCode : model.Journal,
            OfficeId : model.Office,
            VoucherDate : model.VoucherDate,
            ReferenceNo : model.VoucherRefNo,
            VoucherTypeId : model.VoucherType        
        }
                
        return this.http.post(url, JSON.stringify(obj)
        ,options)            
        .map((response: Response) => {
                let journal = response.json();
                if (journal) {
                    return journal;
                }
            }).catch(this.handleError);

    }

    private handleError(error: Response) {
        console.log(error.json());
        return Observable.throw(error.json().error || 'Server error');
    }

    //Journal
    getJournals() {
        return journal;
    }
}
