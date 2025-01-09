import { ContactsData } from '../data/initial-contacts-data';
import { APP_INITIALIZER, Provider } from '@angular/core';
import { ContactsService } from '../../contacts/services/contacts.service';

export function initializeContactsData(contactService: ContactsService): () => void {
  return (): void => contactService.initStorage(ContactsData);
}

export const AppInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeContactsData,
  deps: [ ContactsService ],
  multi: true
}
