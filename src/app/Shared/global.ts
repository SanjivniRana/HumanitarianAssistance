export class GLOBAL { 
    public static API_Login_Auth_Url = 'Account/Login';
    public static API_Account_GetUserType =  'Account/UserTypes';
    public static API_AllOffice_URL = 'OfficeDetail/GetOffices';
    public static API_AllDepartment_Url = 'Account/GetDepartment';
    public static API_Common_GetProviderByMaster="";
    public static API_UserDetail_AddUser ='Account/AddUsers';
    public static API_UserDetail_GetUserList ='Account/GetAllUserDetails';
    public static API_UserRoles_GetRolesList = 'Account/GetRoles';
    public static API_UserRoles_GetUserRolesByUserId = 'Account/GetUserRole';
    public static API_UserRoles_AssignRoleToUser = 'Account/AssignRoleToUser';
    public static API_Permissions_GetPermissionsByRoleId = 'Account/GetPermissionByRoleId';
    public static API_Permissions_GetPermissions = 'Account/GetPermissions';
    public static API_Permissions_AddPermissionInRoles = 'Account/PermissionsInRoles';
    public static API_CheckCurrentPassword ="Account/CheckCurrentPassword";
    public static API_ChangePassword = "Account/ChangePassword";
    public static API_ResetPassword = "Account/ResetPassword";
    public static API_UserDetail_GetUserDetailsByUserId = 'Account/GetUserDetailsByUserId';
    public static API_UserDetail_EditUser ='Account/EditUser';
}