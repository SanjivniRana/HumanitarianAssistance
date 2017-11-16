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
}