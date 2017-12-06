import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';

//#region "Questions class definition"
export class Ques {
    ID: number;
    Question: string;
    Rating1: string;
    Rating2: string;
    Rating3: string;
    Rating4: string;
    Rating5: string;
}
//#endregion "Questions"

//#region "Documents class definition"
export class Documents {
    ID: number;
    DocumentName: string;
    DocumentType: number;
    DocumentFile: string;
}
//#endregion "Documents"

//#region "Beneficiaries class definition"
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
//#endregion "Beneficiaries class definition"

//#region "Activity class definition"
export class Activity {
    // ID: number;
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
//#endregion "Activity class definition"

//#region "ActivitiesData class definition"
export class ActivitiesData {
    ActivityDesc : string;
    PlannedStartDate : string;
    PlannedEndDate : string;
    BudgetLine : string;
    Resource : string;
    LocationOfActivity : string;
    TaskType : string;
}
//#endregion "ActivitiesData class definition"


export class ActivityLocationTypes {
    ActivityLocationTypeId: number;
    ActivityLocationTypeName: string;
}

export class BudgetTypes {
    BudgetTypeId: number;
    BudgetTypeName: string;
}

export class ResourceTypes {
    ResourceTypeId: number;
    ResourceTypeName: string;
}

let budgettypes : BudgetTypes[] = [
    { BudgetTypeId: 1, BudgetTypeName: 'Demo'},
    { BudgetTypeId: 2, BudgetTypeName: 'Demo'}
  ];

 let resourcetypes : ResourceTypes[] = [
    { ResourceTypeId: 1, ResourceTypeName: 'E0001-Wasim Khan'},
    { ResourceTypeId: 2, ResourceTypeName: 'E0002-Salman Khan'},
    { ResourceTypeId: 3, ResourceTypeName: 'E0003-Amir Pathan'},
    { ResourceTypeId: 4, ResourceTypeName: 'E0004-Rahul Khan'},
    { ResourceTypeId: 4, ResourceTypeName: 'E0005-Sam Ansari'}
  ];

 let activitylocationtypes : ActivityLocationTypes[] = [
    { ActivityLocationTypeId: 1, ActivityLocationTypeName: 'TES-TestOffice'}
  ];

//#region "activitiesdata"
let activitiesdata = {
    "ActivityDesc" : "",
    "PlannedStartDate" : "",
    "PlannedEndDate" : "",
    "BudgetLine" : "",
    "Resource" : "",
    "LocationOfActivity" : "",
    "TaskType" : ""
}
//#endregion "activitiesdata"

//#region "measuretype"
let measuretype: string[] = [
   "Qualitative",
   "Quantitative",
   "Qualitative & Quantitative"
]
//#endregion "measuretype"

//#region "projecttype"
let projecttype: string[] = [
    "projecttype1",
    "projecttype2",
    "projecttype3"
 ]
 //#endregion "projecttype"

//#region "ques"
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
]
//#endregion "ques"

//#region "docs"
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
//#endregion "docs"

//#region "beneficiaries"
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
        "ReferDate": "03/11/2017",
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
        "ReferDate": "02/21/2017",
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
        "ReferDate": "09/02/2017",
        "TypeOfCase": "string",
        "TelephoneNo": 7686868,
    }
]
//#endregion "beneficiaries

//#region "activity"
let activity: Activity[] = [
    {
        // "ID": 1,
        "ActivityDesc": "string",
        "PlannedStartDate": "01-05-2017",
        "PlannedEndDate": "02-06-2017",
        "BudgetLine": 1,
        "Resource": 1,
        "LocationOfActivity": 1,
        "ActualStartDate": "02-07-2017",
        "ActualEndDate": "03-08-2017",
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
//#endregion "activity"

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

    // getBudgetType() {
    //     return budgettype;
    // }

    // getResourceType() {
    //     return resourcetype;
    // }

    // getLocationType() {
    //     return locationtype;
    // }

}