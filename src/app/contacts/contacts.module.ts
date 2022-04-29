import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { LayoutComponent } from './layout.component';
import { ContactListComponent } from './contactList.component';
import { ContactFormComponent } from './contactForm.component';

import { AppToastsComponent } from '../_components';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContactsRoutingModule,
        ToastrModule.forRoot() // ToastrModule added
    ],
    declarations: [
        LayoutComponent,
        ContactListComponent,
        ContactFormComponent,
        AppToastsComponent
    ]
})
export class ContactsModule{}