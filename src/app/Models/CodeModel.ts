export interface CurrencyCode
{
    CurrencyId : string;
    CurrencyCode : string;
    CurrencyName : string;
    CurrencyRate : DoubleRange;
}

export interface OfficeCode
{
    OfficeId : any;
    OfficeCode : string;
    OfficeName : string;
    SupervisorName : string;
    PhoneNo : string;
    FaxNo : string;
}

export interface OfficeCodefordelete
{
    OfficeId : any;
}

export interface EmailSetting
{
    EmailId : any;
    SenderEmail : string;
    EmailType : any;
    SenderPassword : string;
    SmtpPort : any;
    SmtpServer : string;
    EnableSSL : boolean;
}