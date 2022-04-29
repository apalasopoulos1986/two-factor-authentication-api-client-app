import { Injectable } from '@angular/core';
import { Contact } from '../_models/contact';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { ContactCreationRequestDTO } from '../_models/contactCreationRequestDTO';
@Injectable()
export class DataService {


    contacts: Contact[] = [];
    constructor(private http: HttpClient) {

    }
    loadAllContacts(): Observable<boolean>  {
        return this.http.get("contacts")
        .pipe(map((data:any) => {
            this.contacts = data;
            return true;
        }))
    }





    postContact(contact:  ContactCreationRequestDTO): Observable<boolean> {
        return this.http.post("contacts", contact)
            .pipe(map(response => {
                return true;
            }))
    }

    updateContact(contactId: string, contact: Contact): Observable<boolean> {
        return this.http.put("contacts" + contactId, contact)
            .pipe(map(response => {
                return true;
            }))
    }

    deleteContact(contactId: string): Observable<boolean> {
        return this.http.delete("contacts" + contactId)
            .pipe(map(response => {
                return true;
            }))
    }
}