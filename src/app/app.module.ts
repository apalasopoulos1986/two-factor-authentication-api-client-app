
import { DataService } from './_services/dataService';
import { ToastService } from './_services';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModule,
      BrowserAnimationsModule, // required animations module
      ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [
      AppComponent,
      AlertComponent,
      HomeComponent
  ],
  providers: [ToastService,DataService,
      // {provide: 'SocialAuthServiceConfig',
      //   useValue: {
      //   autoLogin: true,
      //   providers: [
      //     {
      //       id: GoogleLoginProvider.PROVIDER_ID,
      //       provider: new GoogleLoginProvider('77961592688-i075ppou2674dorbakbfh8flcg93oh9u.apps.googleusercontent.com')
      //     }
      //               ]}
      // },
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { };


