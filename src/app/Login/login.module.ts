import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { UserService } from "../dashboard/admin/user.service";
import { commonService } from "../Services/common.service";
import { LanguageChange } from "../Shared/languageChange";
import { TranslateService, TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateStore } from "@ngx-translate/core/src/translate.store";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "../Services/Authentication.Service";
import { AppSettingsService } from "../Services/App-settings.Service";
import { httpClientService } from "../Auth/httpClient";
import { MessageService } from "primeng/components/common/messageservice";
import { ModalModule } from "ngx-bootstrap";
import { NgxPermissionsModule } from "ngx-permissions";
import { HttpLoaderFactory } from "../app.module";
import { LoadingModule, ANIMATION_TYPES } from "ngx-loading";
import { NgIdleKeepaliveModule } from "@ng-idle/keepalive";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({

    declarations: [LoginComponent],
    imports: [
        LoginRoutingModule,
        HttpModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule.forRoot(),
        NgxPermissionsModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        LoadingModule.forRoot({
            animationType: ANIMATION_TYPES.threeBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#31c3aa',
            secondaryColour: '#000',
            tertiaryColour: '#a129'
        }),
        NgIdleKeepaliveModule.forRoot()
    ],


    providers: [
        UserService,
        commonService,
        LanguageChange,
        TranslateService,
        TranslateStore,
        HttpClient,
        AuthenticationService,
        AppSettingsService,
        httpClientService,
        MessageService],
})
export class LoginModule {
}