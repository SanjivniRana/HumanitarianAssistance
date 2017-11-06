export enum RequestStatus{
    InternalError =  500,
    NotFound  = 400,
    NotAcceptable = 406,
    Confilct = 409,
    Forbidden = 403
}

export enum UserType{
    Admin = 1,
    Master = 2,
    Other = 3,
    Provider = 15
}


export enum LanguageID {
    English =  1,
    French = 2,
    Spanish = 3
}

export enum AgentsDiagnostic
{
    Proparacaine =1,
    Phenylephrine =2,
    Benoxinate=3,
    Cyclogyl=4,
    Tropicamide=5
}

export enum ExamType
{
    Dilation = 16,
    General = 17,
    Emergency = 18
}


export enum Inventory
{
    Frame = 36,
    OphtalmicLenses = 37,
    ContactLenses = 38
}

export enum PrescriptionType
{
    Glass  = 1001,
    ContactLens = 1002
}

export enum Permissions{
    AddPatient =2,
    EditPatient	=3,
    DeletePatient = 4,
    AddAgenda = 5,
    EditAgenda = 6,
    DeleteAgenda = 7,
    AddInventory = 8,
    EditInventory = 9,
    DeleteInventory = 10,
    AddInvoce = 11,
    EditInvoice = 12,
    DeleteInvoice = 13,
    AddPrescription = 14,
    EditPrescription = 15,
    DeletePrescription = 16,
    AddExamTemplate = 17,
    EditExamTemplate = 18,
    DeleteExamTempate = 19,
    PatientStatisics = 20,
    InventoryStatisics = 21,
    SalesStatisics = 22,
    EmployeeStatisics = 23
}
