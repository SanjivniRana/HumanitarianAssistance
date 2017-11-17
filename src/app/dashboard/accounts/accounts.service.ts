import { Injectable } from '@angular/core';

export class Order {
    ID: number;
    VoucherNo: string;
    VoucherDate: string;
    VoucherRefNo: string;
    Office: string;
    Journal: string;
    Description: string;
    Currency: string;
}

export class Voucher {
    ID: number;
    Date: string;
    ACNO: string;
    TransactionDescription: string;
    Debit: number;
    Credit: number;
    Currency: string;
    BL: string;
    Area:string;
    Sector:string;
    Program:string;
    Project:string;
    Job:string;
}

export class Employee1 {
    ID: number;
    Journal: string;
    Office: string;
    Currency:string;
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

let orders: Order[] = [{
    "ID": 1,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "AFG-AFG"
}, {
    "ID": 4,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "AFG-AFG"
}, {
    "ID": 5,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "AFG-AFG"
}, {
    "ID": 7,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "AFG-AFG"
}, {
    "ID": 9,
    "VoucherNo": "35703",
    "VoucherDate": "2014/04/10",
    "VoucherRefNo": "11800",
    "Office": "Kabul",
    "Journal": "California",
    "Description": "Los Angeles",
    "Currency": "AFG-AFG"
}];


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

let customer : Customer = {
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
    'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','The   Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burma','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Central African Republic','Chad','Chile','China','Colombia','Comoros','Democratic Republic of the Congo','Republic of the Congo','Costa Rica','Ivory Coast','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','The Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Republic of Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','North Korea','South Korea','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Republic of Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Federated States of Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Namibia','Nauru','Nepal','Kingdom of the Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau','State of Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','São Tomé and Príncipe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];

//DATA FOR DOCUMENT PAGE
export class Company {
    ID: number;
    DocumentName: string;    
}

let companies: Company[] = [{
    "ID" : 1,
    "DocumentName" : "Document 1"    
},{
    "ID" : 2,
    "DocumentName" : "Document 2"    
},{
    "ID" : 3,
    "DocumentName" : "Document 3"    
}];
//DATA FOR DOCUMENT PAGE ENDS
    
    let employees: Employee1[] = [{
        "ID": 1,
        "Journal": "Journal",
        "Office" :"A0001",
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
            "Currency" :"AFG-AFG",
            "BL": "",
            "Area":"",
            "Sector":"",
            "Program":"",
            "Project":"",
            "Job":""
            
        },
        {
            "ID": 5,
            "Date": "11/02/2017",
            "ACNO": "410201",
            "TransactionDescription": "Kabul Clinic Income",
            "Debit": 10000,
            "Credit": 0.00,
            "Currency" :"AFG-AFG",
            "BL": "",
            "Area":"",
            "Sector":"",
            "Program":"",
            "Project":"",
            "Job":""
        },
        {
            
                        "ID": 4,
                        "Date": "11/02/2017",
                        "ACNO": "410201",
                        "TransactionDescription": "Kabul Clinic Income",
                        "Debit": 0.00,
                        "Credit": 50000,
                        "Currency" :"AFG-AFG",
                        "BL": "",
                        "Area":"",
                        "Sector":"",
                        "Program":"",
                        "Project":"",
                        "Job":""
                        
                    },
                    {
                        "ID": 5,
                        "Date": "11/02/2017",
                        "ACNO": "410201",
                        "TransactionDescription": "Kabul Clinic Income",
                        "Debit": 50000,
                        "Credit": 0.00,
                        "Currency" :"AFG-AFG",
                        "BL": "",
                        "Area":"",
                        "Sector":"",
                        "Program":"",
                        "Project":"",
                        "Job":""
                    },
                    {
                        "ID": 5,
                        "Date": "11/02/2017",
                        "ACNO": "410201",
                        "TransactionDescription": "Kabul Clinic Income",
                        "Debit": 5000,
                        "Credit": 0.00,
                        "Currency" :"AFG-AFG",
                        "BL": "",
                        "Area":"",
                        "Sector":"",
                        "Program":"",
                        "Project":"",
                        "Job":""
                    },
                    {
                        "ID": 5,
                        "Date": "11/02/2017",
                        "ACNO": "410201",
                        "TransactionDescription": "Kabul Clinic Income",
                        "Debit": 3000,
                        "Credit": 0.00,
                        "Currency" :"AFG-AFG",
                        "BL": "",
                        "Area":"",
                        "Sector":"",
                        "Program":"",
                        "Project":"",
                        "Job":""
                    },
                    {
                        "ID": 5,
                        "Date": "11/02/2017",
                        "ACNO": "410201",
                        "TransactionDescription": "Kabul Clinic Income",
                        "Debit": 0.00,
                        "Credit": 8000,
                        "Currency" :"AFG-AFG",
                        "BL": "",
                        "Area":"",
                        "Sector":"",
                        "Program":"",
                        "Project":"",
                        "Job":""
                    }]
    },
    {
        "ID": 2,
        "Journal": "Journal2",
        "Office" :"A0001",
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
                        "Currency" :"AFG-AFG",
                        "BL": "",
                        "Area":"",
                        "Sector":"",
                        "Program":"",
                        "Project":"",
                        "Job":""
                        
                    },
                    {
                        "ID": 5,
                        "Date": "11/02/2017",
                        "ACNO": "410201",
                        "TransactionDescription": "Kabul Clinic Income",
                        "Debit": 10000,
                        "Credit": 0.00,
                        "Currency" :"AFG-AFG",
                        "BL": "",
                        "Area":"",
                        "Sector":"",
                        "Program":"",
                        "Project":"",
                        "Job":""
                    },
                    {
                        
                                    "ID": 4,
                                    "Date": "11/02/2017",
                                    "ACNO": "410201",
                                    "TransactionDescription": "Kabul Clinic Income",
                                    "Debit": 0.00,
                                    "Credit": 50000,
                                    "Currency" :"AFG-AFG",
                                    "BL": "",
                                    "Area":"",
                                    "Sector":"",
                                    "Program":"",
                                    "Project":"",
                                    "Job":""
                                    
                                },
                                {
                                    "ID": 5,
                                    "Date": "11/02/2017",
                                    "ACNO": "410201",
                                    "TransactionDescription": "Kabul Clinic Income",
                                    "Debit": 50000,
                                    "Credit": 0.00,
                                    "Currency" :"AFG-AFG",
                                    "BL": "",
                                    "Area":"",
                                    "Sector":"",
                                    "Program":"",
                                    "Project":"",
                                    "Job":""
                                },
                                {
                                    "ID": 5,
                                    "Date": "11/02/2017",
                                    "ACNO": "410201",
                                    "TransactionDescription": "Kabul Clinic Income",
                                    "Debit": 5000,
                                    "Credit": 0.00,
                                    "Currency" :"AFG-AFG",
                                    "BL": "",
                                    "Area":"",
                                    "Sector":"",
                                    "Program":"",
                                    "Project":"",
                                    "Job":""
                                },
                                {
                                    "ID": 5,
                                    "Date": "11/02/2017",
                                    "ACNO": "410201",
                                    "TransactionDescription": "Kabul Clinic Income",
                                    "Debit": 3000,
                                    "Credit": 0.00,
                                    "Currency" :"AFG-AFG",
                                    "BL": "",
                                    "Area":"",
                                    "Sector":"",
                                    "Program":"",
                                    "Project":"",
                                    "Job":""
                                },
                                {
                                    "ID": 5,
                                    "Date": "11/02/2017",
                                    "ACNO": "410201",
                                    "TransactionDescription": "Kabul Clinic Income",
                                    "Debit": 0.00,
                                    "Credit": 8000,
                                    "Currency" :"AFG-AFG",
                                    "BL": "",
                                    "Area":"",
                                    "Sector":"",
                                    "Program":"",
                                    "Project":"",
                                    "Job":""
                                }
    ]
    }
];

//Data for LEDGER STATEMENT

let ledgers: LedgerClass[] = [{
    "ID": 1,
    "Currency": "USD-USD",
    "Account" :"410101 - Clinic Income",
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
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/04/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0.00,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/05/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 50000,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/06/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0.00,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0.00,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0.00,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 8000,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    }]
},{
    "ID": 2,
    "Currency": "USD-USD",
    "Account" :"410102 - Sports Income",
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
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/04/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0.00,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/05/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0.00,
        "Credit": 50000,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/06/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0.00,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0,
        "Credit": 8000,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    }]
},
{
    "ID": 3,
    "Currency": "USD-USD",
    "Account" :"410102 - Medical Income",
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
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/04/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 10000,
        "Credit": 0,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/05/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0,
        "Credit": 50000,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/06/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 50000,
        "Credit": 0,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 5000,
        "Credit": 0,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 3000,
        "Credit": 0,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    },
    {
        "ID": 4,
        "Date": "11/07/2017",
        "Voucher": "410201",
        "LineItemDescription": "Kabul Clinic Income",
        "Debit": 0,
        "Credit": 8000,
        "Currency" :"AFG-AFG",
        "Status": "Active"                
    }]
}
];

//FOr TRAIL BALANCE 

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

let trial: TrailBalanceClass[] = [{
    "ID": 1,
    "Currency": "AFG-AFG",
    "Account" :"410101 - Clinic Income",
    "Office" : "TestOffice",
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
    "Account" :"410101 - Medical Income",
    "Office" : "TestOffice",
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

@Injectable()
export class AccountsService {
    getOrders(): Order[] {
        return orders;
    }

    getCustomer() : Customer {
        return customer;
    }

    getCountries() {
        return countries;
    }

    //Document Function 
    getCompanies() {
        return companies;
    }
    getEmployees() {
        return employees;
    }
    getLedger(){
        return ledgers;
    }

    getTrailBalance(){
        return trial;
    }
}