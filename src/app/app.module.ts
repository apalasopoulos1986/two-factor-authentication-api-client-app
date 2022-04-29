
import { DataService } from './_services/dataService';
import { ToastService } from './_services';
import { AppToastsComponent } from './_components/appToasts.component';
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


@NgModule({
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModule
  ],
  declarations: [
      AppComponent,
      AlertComponent,
      AppToastsComponent,
      HomeComponent
  ],
  providers: [ToastService,DataService,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { };


