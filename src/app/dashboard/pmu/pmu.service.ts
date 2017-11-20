import { Injectable } from '@angular/core';

// PMU Projects starts
export class PMUProject{
  ID: number;
  Sector: string;
  ProjectCode: string;
  ProjectName: string;
  ProjectBudget: number;
  Donor: string;  
}

let pmuprojects: PMUProject[] = [{
  "ID": 1,
  "Sector": "Rural Development & Social Protection",
  "ProjectCode": "1234",
  "ProjectName": "Welfare",
  "ProjectBudget": 9000,
  "Donor":"test"
}];

//PMU Projects ends
@Injectable()
export class PmuService {
  getPMUProjects()
  {
    return pmuprojects;
  }
}
