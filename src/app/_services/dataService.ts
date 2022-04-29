import { Injectable } from '@angular/core';
import { Contact } from '../_models/contact';
import { environment } from './../../environments/environment';
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
        return this.http.get(environment.apiUrl+"/contacts")
        .pipe(map((data:any[]) => {
            this.contacts = data;
            return true;
        }))
    }





    postContact(contact:  ContactCreationRequestDTO): Observable<boolean> {
        return this.http.post(environment.apiUrl+"/contacts", contact)
            .pipe(map(response => {
                return true;
            }))
    }

    updateContact(contactId: string, contact: Contact): Observable<boolean> {
        return this.http.put(environment.apiUrl+"/contacts/" + contactId, contact)
            .pipe(map(response => {
                return true;
            }))
    }

    deleteContact(contactId: string): Observable<boolean> {
        return this.http.delete(environment.apiUrl+"/contacts/" + contactId)
            .pipe(map(response => {
                return true;
            }))
    }
}