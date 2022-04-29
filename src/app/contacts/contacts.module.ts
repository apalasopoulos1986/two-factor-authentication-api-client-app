import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { LayoutComponent } from './layout.component';
import { ContactListComponent } from './contactList.component';
import { ContactFormComponent } from './contactForm.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ContactsRoutingModule 
    ],
    declarations: [
        LayoutComponent,
        ContactListComponent,
        ContactFormComponent
    ]
})
export class ContactsModule{}