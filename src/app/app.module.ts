import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routing } from './app.route';
import { AppHeaderComponent } from "./Components/shared/appHeader.component";
import { LoginComponent } from "./Login/login.component"
import { CommonService } from "../../src/app/app.common";
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HttpModule } from '@angular/http';
import { LanguageChange } from './Shared/languageChange';
import { TranslateModule, TranslateService, TranslateLoader} from "@ngx-translate/core";
import { TranslateHttpLoader} from  '@ngx-translate/http-loader';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './Services/Authentication.Service';
import { AppSettingsService } from './Services/App-settings.Service';
import { httpClientService } from "./Auth/httpClient";
import { MessageService } from 'primeng/components/common/messageservice';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppSidebarComponent } from './Components/shared/appSideBar.component';
import { commonService } from './Services/common.service';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
  
}
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
    }),
   
    NgIdleKeepaliveModule.forRoot()
  ]
  ,
  providers: [commonService,LanguageChange,TranslateService,TranslateStore,HttpClient,AuthenticationService,AppSettingsService,httpClientService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
