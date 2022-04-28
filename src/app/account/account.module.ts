import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AccountRoutingModule } from './account-routing.module'



@NgModule({
  imports: [
      CommonModule,
      ReactiveFormsModule,
      AccountRoutingModule
  ],
  declarations: [
      LayoutComponent,
      LoginComponent,
      RegisterComponent
  ]
})
export class AccountModule { }