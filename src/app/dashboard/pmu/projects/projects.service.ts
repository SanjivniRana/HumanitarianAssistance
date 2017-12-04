import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Ques {
    ID: number;
    Question: string;
    Rating1: string;
    Rating2: string;
    Rating3: string;
    Rating4: string;
    Rating5: string;
}

export class Documents {
    ID: number;
    DocumentName: string;
    DocumentType: number;
    DocumentFile: string;
}

export class Beneficiaries {
    ID: number;
    SerialNo: number;
    Name: string;
    FName: string;
    Province: string;
    District: string;
    Village: string;
    IDNo: number;
    Age: number;
    Sex: number;
    MaritalStatus: number;
    Referrer: string;
    ReferDate: string;
    TypeOfCase: string;
    TelephoneNo: number;
}

export class Activity {
    ID: number;
    ActivityDesc: string;
    PlannedStartDate: string;
    PlannedEndDate: string;
    BudgetLine: number;
    Resource: number;
    LocationOfActivity: number;
    ActualStartDate: string;
    ActualEndDate: string;
    ImplementationMethod: string;
    Challenges: string;
    OvercomingChallenges: string;
    DeviationJustification: string;
    RecurringType: string;
    RecurringDay: string;
    RecurringMonth: string;
    TaskType: string;
}

export class ActivitiesData{
    ActivityDesc : string;
    PlannedStartDate : string;
    PlannedEndDate : string;
    BudgetLine : string;
    Resource : string;
    LocationOfActivity : string;
    TaskType : string;
}

let activitiesdata = {
    "ActivityDesc" : "string",
    "PlannedStartDate" : "string",
    "PlannedEndDate" : "string",
    "BudgetLine" : "string",
    "Resource" : "string",
    "LocationOfActivity" : "string",
    "TaskType" : "string"
}

let measuretype: string[] = [
   "Qualitative",
   "Quantitative",
   "Qualitative & Quantitative"
]

let projecttype: string[] = [
    "projecttype1",
    "projecttype2",
    "projecttype3"
 ]

//ques
let ques: Ques[] = [
    {
        'ID': 1,
        "Question": "abc",
        "Rating1": "string",
        "Rating2": "string",
        "Rating3": "string",
        "Rating4": "string",
        "Rating5": "string",
    },
    {
        'ID': 2,
        "Question": "abc",
        "Rating1": "string",
        "Rating2": "string",
        "Rating3": "string",
        "Rating4": "string",
        "Rating5": "string",
    },
    {
        'ID': 3,
        "Question": "abc",
        "Rating1": "string",
        "Rating2": "string",
        "Rating3": "string",
        "Rating4": "string",
        "Rating5": "string",
    },

    {
        'ID': 4,
        "Question": "abc",
        "Rating1": "string",
        "Rating2": "string",
        "Rating3": "string",
        "Rating4": "string",
        "Rating5": "string",
    }
];

let docs: Documents[] = [
    {
        "ID": 1,
        "DocumentName": "string",
        "DocumentType": 1,
        "DocumentFile": "string",
    },
    {
        "ID": 2,
        "DocumentName": "string",
        "DocumentType": 2,
        "DocumentFile": "string",
    },
    {
        "ID": 2,
        "DocumentName": "string",
        "DocumentType": 3,
        "DocumentFile": "string",
    },
]

let beneficiaries: Beneficiaries[] = [
    {
        "ID": 1,
        "SerialNo": 34,
        "Name": "string",
        "FName": "string",
        "Province": "string",
        "District": "string",
        "Village": "string",
        "IDNo": 1,
        "Age": 11,
        "Sex": 1,
        "MaritalStatus": 1,
        "Referrer": "string",
        "ReferDate": "string",
        "TypeOfCase": "string",
        "TelephoneNo": 7686868,
    },
    {
        "ID": 2,
        "SerialNo": 34,
        "Name": "string",
        "FName": "string",
        "Province": "string",
        "District": "string",
        "Village": "string",
        "IDNo": 1,
        "Age": 11,
        "Sex": 1,
        "MaritalStatus": 1,
        "Referrer": "string",
        "ReferDate": "string",
        "TypeOfCase": "string",
        "TelephoneNo": 7686868,
    },
    {
        "ID": 3,
        "SerialNo": 34,
        "Name": "string",
        "FName": "string",
        "Province": "string",
        "District": "string",
        "Village": "string",
        "IDNo": 1,
        "Age": 11,
        "Sex": 1,
        "MaritalStatus": 1,
        "Referrer": "string",
        "ReferDate": "string",
        "TypeOfCase": "string",
        "TelephoneNo": 7686868,
    }
]

let activity: Activity[] = [
    {
        "ID": 1,
        "ActivityDesc": "string",
        "PlannedStartDate": "string",
        "PlannedEndDate": "string",
        "BudgetLine": 1,
        "Resource": 1,
        "LocationOfActivity": 1,
        "ActualStartDate": "string",
        "ActualEndDate": "string",
        "ImplementationMethod": "string",
        "Challenges": "string",
        "OvercomingChallenges": "string",
        "DeviationJustification": "string",
        "RecurringType": "string",
        "RecurringDay": "string",
        "RecurringMonth": "string",
        "TaskType": "string"
    }
]

@Injectable()
export class ProjectsService {

    getQues() {
        return ques;
    }

    getDocs() {
        return docs;
    }

    getBeneficiaries() {
        return beneficiaries;
    }

    getActivities() {
        return activity;
    }

    getMeasureType() {
        return measuretype;
    }

    getProjectType() {
        return projecttype;
    }

    getActivitiesData() {
        return activitiesdata;
    }

}