import { Injectable } from '@angular/core';
import { OfficeCode } from '../../Models/CodeModel';

@Injectable()
export class HrService {

  constructor() { }

  //#region Main Get methods

  //EmployeeList
  getEmployeeLists() {
    return employeeLists;
  }

  // Select Employee Info to fill its details
  getSelectInfoDropdown() {
    return selectInfoDropdowns;
  }

  getOfficeType() {
    return officeType;
  }

  getPayrollMonthlyHours() {
    return payrollMonthlyHours;
  }

  getMonthlyPayrollSheet(){
    return monthlyPayrollSheet;
  }

  getMonthlyLeavesRegister(){
    return monthlyLeavesRegister;
  }

  getCurrencyType(){
    return currencyType;
  }
  
  //General Details
  getGeneralInfo() {
    return generalInfos;
  }

  //Analytical Details
  getAnalyticalInfo() {
    return analyticalInfos;
  }

  //Histories
  getHistories() {
    return histories;
  }

  //Advance Histories
  getAdvanceHistories() {
    return advanceHistories;
  }

  //payrollHistories
  getPayrollHistories() {
    return payrollHistories;
  }

  //leaveRecords
  getLeaveRecords() {
    return leaveRecords;
  }

  //documents
  getdocuments() {
    return documents;
  }

  //pensionSalaryTax
  getPensionSalaryTax() {
    return pensionSalaryTaxes;
  }
  //endregion


  //region Dropdown get methods

  getDeductionType() {
    return deductionTypes;
  }

  getProspectiveEmployee() {
    return prospectiveEmployee;
  }

  getGender() {
    return gender;
  }
  //endregion
}


//#region "monthly-leaves-register dropdown"
export class OfficeType {
  OfficeTypeId: number;
  OfficeTypeName: string;
}

let officeType : OfficeType[] = [
  { OfficeTypeId: 1, OfficeTypeName: 'TES-TestOffice'}
];
//#endregion "monthly-leaves-register dropdown"

//#region "monthly-payroll-sheet dropdown"
export class CurrencyType {
  CurrencyTypeId: number;
  CurrencyTypeName: string;
}

let currencyType : CurrencyType[] = [
  { CurrencyTypeId: 1, CurrencyTypeName: 'AFG-AFG'},
  { CurrencyTypeId: 2, CurrencyTypeName: 'USD-USD'}
];
//#endregion "monthly-payroll-sheet dropdown"


//Menu 1
//#region Employee -- 

//#region EmployeeList 
export class EmployeeList {
  ID: number;
  ProfileImage: string;
  EmployeeType: number;
  EmployeeCode: number;
  EmployeeName: string;
  FatherName: string;
  Gender: number;
  Designation: number;
  Office: number;
  BasicPay: string;
  Currency: number;

}

let employeeLists: EmployeeList[] = [
  {
    ID: 1,
    ProfileImage:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8RDw8QEBITFhASEBgPEBAVEBESFhUXFhUXFxUYHSogGBolGxcVITEhJSkrLjIuHR8zOjMsNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOYA2wMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABIEAACAgIAAwUDBwUNCAMAAAABAgADBBEFEiEGEzFBUWFxgRQiIzJykaFCYoKisQcVFjNSU2Nzg5KTwtE0Q5SjsrO0wSQ1RP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARExuBmY3IbiHajFqc1Kz5F4/3WJW11wP5wXpX73Kia65fFb/qY1GEvrlWd9f7D3VJ5B/iGBYdzMgP3ky3A77iV+/P5PXTUv4hm/Gff8Gaz9fIzXPqcq0fgpAgTe43INuzSgfR5ebX7Rku3/XufJ4Xn167niHea/JzKEfm9nPXyke/rAn4lcbjuVj/AO24L8g8bsEnIqHtaoAXL8Eb3yY4dxKjJQWY9qWodjdbAgEeIOvAjzB6iBtxEQEREBERAREQEREBERAREQEREBETxy8hKkeyxgqICzE+AAGyYGtxfi1WKgawkliEqRBzW22HwRF8z+zxPSRg4dlZfzsuxqKz4UY7kEj0tuHUn1C6HvmeBYbXWHPyV1a45cZW/wDzY50dAeTv0Zj9keCywaga2Bw+nHQV0VJUg8FrUKPw8T7Zs6mYgIiICIiBjUiOI9n6rHN1RbGyP52jQZvZYvhYPtSYiBAY/GrKHWnPVayxC1XJv5Pcx8FO/wCLc+SnofImTwnjm4ld1b1Wotlbgq6uAVZT4ggyF4Nc+Lb8iudnXRbDscks9a+NbserOnTqepGj1IMCwxEQEREBERAREQEREBERAREQEgO0n012Jh+VrNbd49aadMRsermse4mT8r3Dz3nE819n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",
    EmployeeType: 1,
    EmployeeCode: 1111,
    EmployeeName: "John",
    FatherName: "Mike",
    Gender: 1,
    Designation: 1,
    Office: 1,
    BasicPay: "20000",
    Currency: 1
  },
  {
    ID: 2,
    ProfileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAZXesf_n8T4s814-kg7OpPZjgtjKJzV92bOd0_hwIXmKAkNXIQ",
    EmployeeType: 2,
    EmployeeCode: 1112,
    EmployeeName: "J.K.",
    FatherName: "Star",
    Gender: 2,
    Designation: 2,
    Office: 1,
    BasicPay: "30000",
    Currency: 1
  },
  {
    ID: 3,
    ProfileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAZXesf_n8T4s814-kg7OpPZjgtjKJzV92bOd0_hwIXmKAkNXIQ",
    EmployeeType: 2,
    EmployeeCode: 1113,
    EmployeeName: "Mac",
    FatherName: "Jerry",
    Gender: 1,
    Designation: 3,
    Office: 1,
    BasicPay: "25000",
    Currency: 2
  },
  {
    ID: 4,
    ProfileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8EO9Ur-qyaQcTYhzO-la_2lmSTu_rt14r8X0UyrJjjhULgYgLQ",
    EmployeeType: 3,
    EmployeeCode: 1114,
    EmployeeName: "Jasmin",
    FatherName: "Druk",
    Gender: 2,
    Designation: 4,
    Office: 1,
    BasicPay: "60000",
    Currency: 2
  }
];

//#endregion

//#region Select Employee Info -- 
export class SelectInfoDropdown {
  ID: number;
  Name: string;
}

let selectInfoDropdowns: SelectInfoDropdown[] = [
  {
    ID: 1,
    Name: "General Info"
  },
  {
    ID: 2,
    Name: "Professional Info"
  },
  {
    ID: 3,
    Name: "Analytical Info"
  },
  {
    ID: 4,
    Name: "History"
  },
  {
    ID: 5,
    Name: "Advance History"
  },
  {
    ID: 6,
    Name: "Payroll History"
  },
  {
    ID: 7,
    Name: "Leave Records"
  },
  {
    ID: 8,
    Name: "Documents"
  },
  {
    ID: 9,
    Name: "Pension & Salary Tax"
  }
];
//#endregion


//Tabs -------------------------------------

//#region -- General Info --
export class GeneralInfo {
  ID: number;
  ProfileImage: string;
  EmployeeCode: number;
  EmployeeName: string;
  IDCardNo: number;
  FatherName: string;
  Office: number;
  Department: string;
  Grade: number;
  Designation: number;
  PermanentAddress: string;
  Village: string;
  City: string;
  District: string;
  Province: number;
  Country: string;
  Phone: string;
  Fax: string;
  Email: string;
  ReferredBy: string;

  // OtherInfo

  PassportNo: string;
  Nationality: string;
  Language: string;
  Sex: number;
  BirthDate: string;
  BirthPlace: string;
  Qualification: number;
  CurrentAddress: string;
  Experience: string;
  Profession: number;
  PreviousWork: string;
  PreviousExperience: string;
  Remarks: string;
}

let generalInfos: GeneralInfo[] = [
  {
    ID: 1,
    ProfileImage: "string",
    EmployeeCode: 1,
    EmployeeName: "string",
    IDCardNo: 1,
    FatherName: "string",
    Office: 1,
    Department: "string",
    Grade: 1,
    Designation: 1,
    PermanentAddress: "string",
    Village: "string",
    City: "string",
    District: "string",
    Province: 1,
    Country: "string",
    Phone: "string",
    Fax: "string",
    Email: "string",
    ReferredBy: "string",

    // OtherInfo

    PassportNo: "AXC10999222344",
    Nationality: "string",
    Language: "string",
    Sex: 1,
    BirthDate: "string",
    BirthPlace: "string",
    Qualification: 1,
    CurrentAddress: "string",
    Experience: "string",
    Profession: 1,
    PreviousWork: "string",
    PreviousExperience: "string",
    Remarks: "string",
  },

  {
    ID: 2,
    ProfileImage: "string",
    EmployeeCode: 2,
    EmployeeName: "string",
    IDCardNo: 2,
    FatherName: "string",
    Office: 2,
    Department: "string",
    Grade: 2,
    Designation: 2,
    PermanentAddress: "string",
    Village: "string",
    City: "string",
    District: "string",
    Province: 2,
    Country: "string",
    Phone: "string",
    Fax: "string",
    Email: "string",
    ReferredBy: "string",

    // OtherInfo

    PassportNo: "CVC10999222344",
    Nationality: "string",
    Language: "string",
    Sex: 2,
    BirthDate: "string",
    BirthPlace: "string",
    Qualification: 2,
    CurrentAddress: "string",
    Experience: "string",
    Profession: 2,
    PreviousWork: "string",
    PreviousExperience: "string",
    Remarks: "string",
  }
];

//#endregion

//#region -- Professional Info --
export class ProfessionalInfo {
  //Contact Info
  ID: number;
  Status: number;
  Type: number;
  StartDate: string;
  EndDate: string;
  ContactNo: string;
  ContractPeriod: number;
  HiredOn: string;
  FiredOn: string;
  FiredReason: string;
  ResignedOn: string;
  ResignedReason: string;

  //Salary & Allowances
  Currency: number;
  MonthlyRate: number;
  HourlyRate: number;
  FoodAllowance: string;
  TRAllowance: string;
  MedicalAllowance: string;
  OtherAllowance: string;
  OtherDescription: string;

  //Deductibles
  CapacityBuilding: string;
  Security: string;
  Fines: number;
  Other: string;
  FineReason: string;

  JobDescription: string;
  TrainingBenefits: string;


}
//#endregion


//#region -- Analytical Info --
export class AnalyticalInfo {
  ID: number;
  AccountCode: number;
  BLine: string;
  Area: string;
  Sector: string;
  Program: string;
  Project: string;
  Job: string;
  CostBook: string;
  SalaryPercentage: number;
}

let analyticalInfos: AnalyticalInfo[] = [
  {
    ID: 1,
    AccountCode: 1,
    BLine: "string",
    Area: "string",
    Sector: "string",
    Program: "string",
    Project: "string",
    Job: "string",
    CostBook: "string",
    SalaryPercentage: 1
  },
  {
    ID: 2,
    AccountCode: 2,
    BLine: "string2",
    Area: "string",
    Sector: "string",
    Program: "string2",
    Project: "string",
    Job: "string",
    CostBook: "string",
    SalaryPercentage: 2
  }
];

//#endregion


//#region -- History -- 
export class History {
  ID: number;
  HistoryDate: string;
  Description: string;
}

let histories: History[] = [
  {
    ID: 1,
    HistoryDate: "02/24/2016",
    Description: "string1"
  },
  {
    ID: 2,
    HistoryDate: "12/18/2016",
    Description: "string2"
  }
];

//#endregion


//#region -- Advance History --
export class AdvanceHistory {
  ID: number;
  AdvanceDate: string;
  Currency: number;
  Description: string;
  VoucherRefNo: number;
  Amount: number;
}

let advanceHistories: AdvanceHistory[] = [
  {
    ID: 1,
    AdvanceDate: "01/12/2015",
    Currency: 1,
    Description: "string",
    VoucherRefNo: 1,
    Amount: 2000
  },
  {
    ID: 2,
    AdvanceDate: "04/19/2015",
    Currency: 2,
    Description: "string1",
    VoucherRefNo: 2,
    Amount: 5210
  }
];


//#endregion


//#region -- Payroll History --
export class PayrollHistory {
  ID: number;
  Office: number;
  Currency: number;
  Date: number;
  BasicPay: number;
  Attendence: number;
  Salary: number;
  Food: number;
  Medical: number;
  TAllowance: number;
  Other: number;
  OtherDescription: string;
  Gross: number;
  AdvDed: number;
  SalaryTax: number;
  CBDeb: string;
  Fines: number;
  Pension: number;
  Security: number;
  NetSalary: number;
  BudgetBalance: number;
  Details: string;
}

let payrollHistories: PayrollHistory[] = [
  {
    ID: 1,
    Office: 1,
    Currency: 1,
    Date: 2015,
    BasicPay: 2000,
    Attendence: 20,
    Salary: 321014,
    Food: 210121,
    Medical: 121212,
    TAllowance: 212312123,
    Other: 2110,
    OtherDescription: "string",
    Gross: 121,
    AdvDed: 2121,
    SalaryTax: 121,
    CBDeb: "string",
    Fines: 2121,
    Pension: 12121,
    Security: 21212,
    NetSalary: 124124,
    BudgetBalance: 1888888,
    Details: "struin"
  },
  {
    ID: 2,
    Office: 2,
    Currency: 2,
    Date: 2017,
    BasicPay: 20760,
    Attendence: 30,
    Salary: 321014,
    Food: 210121,
    Medical: 121212,
    TAllowance: 5555555,
    Other: 2110,
    OtherDescription: "string2",
    Gross: 121,
    AdvDed: 2121,
    SalaryTax: 121,
    CBDeb: "string1",
    Fines: 2121,
    Pension: 555555,
    Security: 777777,
    NetSalary: 124124,
    BudgetBalance: 1999999,
    Details: "struin3"
  }
];

//#endregion


//#region -- Leave Records --
export class LeaveRecords {
  ID: number;
  Office: number;
  Date: string;       //year month combined
  AL: number;
  SL: number;
  EL: number;
  ML: number;
  Attendence: number;
  Absentees: number;
  Deput: number;
}

let leaveRecords: LeaveRecords[] = [
  {
    ID: 1,
    Office: 1,
    Date: "01/12/2016",
    AL: 1,
    SL: 1,
    EL: 1,
    ML: 1,
    Attendence: 25,
    Absentees: 5,
    Deput: 1,
  },
  {
    ID: 2,
    Office: 1,
    Date: "05/11/2017",
    AL: 3,
    SL: 3,
    EL: 2,
    ML: 4,
    Attendence: 28,
    Absentees: 2,
    Deput: 1,
  }
];


//#endregion


//#region -- Documents  --
export class Documents {
  ID: number;
  DocumentName: string;
  DocumentFile: string;

}

let documents: Documents[] = [
  {
    ID: 1,
    DocumentName: "abc",
    DocumentFile: "asppks:fdlfjhdj/dfhd",
  },
  {
    ID: 2,
    DocumentName: "xyz",
    DocumentFile: "apcc:fdlfjhdj/dfhd",
  }
];

//#endregion


//#region -- PensionSalaryTax  -- 

export class PensionSalaryTax {
  ID: number;
  Date: string;
  Office: number;
  Currency: number;
  DeductionType: number;
  Amount: number;
}

let pensionSalaryTaxes: PensionSalaryTax[] = [
  {
    ID: 1,
    Date: "03/12/2015",
    Office: 1,
    Currency: 1,
    DeductionType: 1,
    Amount: 200000
  },
  {
    ID: 2,
    Date: "04/14/2015",
    Office: 1,
    Currency: 1,
    DeductionType: 2,
    Amount: 320101
  }
];


//DeductionType dropdown
export class DeductionType {
  ID: number;
  Type: string;
}

let deductionTypes: DeductionType[] = [
  {
    ID: 1,
    Type: "Pension"
  },
  {
    ID: 2,
    Type: "Salary Tax"
  }
];

// Salary Tax
// export class PensionSalaryTaxSalaryTax {
//   ID: number;
//   Date: string;
//   Office: number;
//   Currency: number;
//   SalaryTax: number;
// }

//#endregion




//#endregion



//Menu 2
//#region -- Prospective Employee -- 

export class ProspectiveEmployee {
  ID: number;
  EmployeeCode: number;
  EmployeeName: string;
  FatherName: string;
  Gender: number;
  Nationality: string;
  ReferredBy: string;
  PassportNo: string;
  IDCardNo: string;
  Designation: number;
  Qualification: number;
  CVDate: string;
  Profession: string;
  Phone: string;
  Fax: string;
  Email: string;
  PermanentAddress: string;
  CurrentAddress: string;
  Remarks: string;

  // Demands
  BasicPay: number;
  Currency: number;
  Office: number;


}

let prospectiveEmployee: ProspectiveEmployee[] = [
  {
    ID: 1,
    EmployeeCode: 1111,
    EmployeeName: "string",
    FatherName: "string",
    Gender: 2,
    Nationality: "string",
    ReferredBy: "string",
    PassportNo: "23424sdsdsd",
    IDCardNo: "string",
    Designation: 1,
    Qualification: 1,
    CVDate: "01/24/2016",
    Profession: "string",
    Phone: "8542145745",
    Fax: "AAD12121",
    Email: "string",
    PermanentAddress: "string",
    CurrentAddress: "string",
    Remarks: "string",
    BasicPay: 121223,
    Currency: 1,
    Office: 1
  },
  {
    ID: 2,
    EmployeeCode: 2222,
    EmployeeName: "string",
    FatherName: "string",
    Gender: 1,
    Nationality: "string",
    ReferredBy: "string",
    PassportNo: "23424sdsdsd",
    IDCardNo: "string",
    Designation: 1,
    Qualification: 1,
    CVDate: "01/24/2016",
    Profession: "string",
    Phone: "8542145745",
    Fax: "SSS12121",
    Email: "string",
    PermanentAddress: "string",
    CurrentAddress: "string",
    Remarks: "string",
    BasicPay: 200000,
    Currency: 2,
    Office: 2
  }
];


//-------------------Dropdown----------------------
//#region 
let gender: any[] = [
  {
    ID: 1,
    Name: "Male"
  },
  {
    ID: 2,
    Name: "Female"
  },
  {
    ID: 3,
    Name: "Other"
  }
];
//#endregion


//#endregion



//Menu 3
//#region -- Advances -- 

export class Advances {
  ID: number;
  EmployeeCode: number;
  EmployeeName: string;
  AdvanceDate: string;
  Currency: number;
  VoucherReferenceNo: number;
  ApprovedBy: string;
  ModeOfReturn: string;
  Description: string;
  RequestAmount: number;
  AdvanceAmount: number;
}

//#endregion


//Menu 6
//#region -- Payroll Monthly Hours -- 

export class PayrollMonthlyHours {
  ID: number;
  Office: number;
  Year: string;
  Month: string;
  Hours: number;

}

let payrollMonthlyHours : PayrollMonthlyHours[] = [
  { 
    ID: 1,
    Office: 1,
    Year: "2017",
    Month: "11",
    Hours: 15,
  },
  { 
    ID: 2,
    Office: 1,
    Year: "2017",
    Month: "3",
    Hours: 8,
  }
];


//#endregion


//#region "Monthly Payroll Sheet"
export class MonthlyPayrollSheet {
  ID: number;
  EmpCode: number;
  EmpName: string;
  Office: number;
  Currency: number;
  Designation: string;
  Month: string;
  Project: number;
  Job: string;
  BLine: string;
  Type: string;
  BasicPay: number;
  Atd: string;
  Abs: string;
  Salary: number;
  Food: number;
  Medical: number;
  TAllowance: number;
  Other: number;
  Other1: number;
  Other1Desc: string;
  Other2: number;
  Other2Desc: string;
  Gross: number;
  SalaryTax: number;
  CBDed: string;
  Fines: number; 
  Security: number;
  Pension: number;
  Others: string;
  NetSalary: number;
  BudgetBalance: number;
  Details: string;
  SalarySlip: number;
}

let monthlyPayrollSheet : MonthlyPayrollSheet[] = [
  { 
    ID: 1,
    EmpCode: 1,
    EmpName: "emp1",
    Office: 1,
    Currency: 2,
    Designation: "associate",
    Month: "4-6-2017",
    Project: 1,
    Job: "5-7-2017",
    BLine: "8-2-2017",
    Type: "string",
    BasicPay: 2000,
    Atd: "string",
    Abs: "string",
    Salary: 10000,
    Food: 1000,
    Medical: 1650,
    TAllowance: 1280,
    Other: 100,
    Other1: 800,
    Other1Desc: "none",
    Other2: 0,
    Other2Desc: "none",
    Gross: 500,
    SalaryTax: 1700,
    CBDed: "string",
    Fines: 0,
    Security: 2200,
    Pension: 6000,
    Others: "none",
    NetSalary: 18000,
    BudgetBalance: 6000,
    Details: "string",
    SalarySlip: 16
  }
];
//#endregion "Monthly Payroll Sheet"


//#region "Monthly leaves register"
export class MonthlyLeavesRegister {
  ID: number;
  Code: number;
  EmployeeName: string;
  Designation: string;
  Office: number;
  Month: string;
  FilterType: number;
}

let monthlyLeavesRegister : MonthlyLeavesRegister[] = [
  { 
    ID: 1,
    Code: 1,
    EmployeeName: "emp1",
    Designation: "manager",
    Office: 1,
    Month: "2-2-2017",
    FilterType: 67
  },
  { 
    ID: 2,
    Code: 2,
    EmployeeName: "emp2",
    Designation: "senior manager",
    Office: 1,
    Month: "6-10-2017",
    FilterType: 44
  }
];
//#endregion "Monthly leaves register"


