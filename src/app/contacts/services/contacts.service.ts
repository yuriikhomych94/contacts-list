import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Contact } from '../types/contact';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  private readonly STORAGE_KEY = 'contacts';

  private _currentContact = new BehaviorSubject<Contact>({} as Contact);
  private _contacts = new BehaviorSubject<Contact[]>([]);

  contacts$: Observable<Contact[]> = this._contacts.asObservable();

  get currentContact(): Contact {
    return this._currentContact.value;
  }

  get contacts(): Contact[] {
    return this._contacts.value;
  }

  addContact(contact: Contact): void {
    this._contacts.next([ ...this._contacts.value, { ...contact, id: `uuid-${Date.now().toString()}` } ])
    this.updateLocalStorage();
  }

  removeContact(id: string) {
    const filteredContacts: Contact[] = this._contacts.value.filter(contact => contact.id !== id);
    this._contacts.next(filteredContacts)
    this.updateLocalStorage()
  }

  applyContactChanges(changes: Partial<Contact>) {
    const currentContact = this._currentContact.value;
    if (currentContact) {
      Object.assign(currentContact, changes);
      this._contacts.next([...this._contacts.value]);
      this.updateLocalStorage();
    }
  }

  setCurrentContact(contact: Contact): void {
    this._currentContact.next(contact);
  }

  filterContacts(searchTerm: string): Observable<Contact[]> {
    return this.contacts$.pipe(
      map(contacts => contacts.filter(contact => contact.username.toLowerCase().startsWith(searchTerm.toLowerCase())))
    );
  }

  initStorage(data: Contact[]): void {
    const storedContacts = localStorage.getItem(this.STORAGE_KEY)
    if ( !storedContacts ) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      this._contacts.next(data);
    } else {
      this._contacts.next(JSON.parse(storedContacts));
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._contacts.value));
  }
}
