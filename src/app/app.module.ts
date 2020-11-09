import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { JwtInterceptor } from './security/jwt.interceptor';
import { AuthenticationService } from './security/authentication.service';
import { AuthGuard } from './security/auth.guard';
import { ErrorInterceptor } from './security/authentication.interceptor';
import {FooterComponent, FooterModule, HeaderComponent, LoginFormModule, UserPanelModule} from './shared/components';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ApiService} from './shared/services/api.service';
import {DevExtremeModule} from 'devextreme-angular';
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from './layouts';
import {NotAuthorizedContainerModule} from './not-authorized-container';
import {AppInfoService, ScreenService} from './shared/services';
import {DxButtonModule} from "devextreme-angular";

import { CommonModule } from '@angular/common';
import { GeneralEvaluationFormComponent } from './pages/user/generalevaluationform/generalevaluationform/general-evaluation-form/general-evaluation-form.component';
import { PatientFormComponent } from './pages/user/generalevaluationform/patientform/patient-form/patient-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralEvaluationFormComponent,
    PatientFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModule,

    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    NotAuthorizedContainerModule,
    DxButtonModule,
    UserPanelModule
  ],
  providers: [ApiService, AuthenticationService, AuthGuard, AppInfoService, ScreenService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, // giden her requeste JWT token'ını ekliyor dogrulama icin
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  entryComponents: [JwtInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
