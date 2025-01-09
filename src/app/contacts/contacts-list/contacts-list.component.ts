import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from '../services/dialog.service';
import { ContactsService } from '../services/contacts.service';
import { BaseComponent } from '../../core/base/base.component';
import { Contact } from '../types/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactsListComponent extends BaseComponent implements OnInit {

  contacts$: Observable<Contact[]> = this.contactService.contacts$;

  displayedColumns: string[] = [ 'username', 'lastname', 'emailAddress', 'phone', 'actions' ];

  constructor(private readonly contactService: ContactsService,
              private readonly dialogService: DialogService,
              private snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
  }

  onSearchChange(searchTerm: string): void {
    if ( searchTerm ) {
      this.contacts$ = this.contactService.filterContacts(searchTerm)
    } else {
      this.contacts$ = this.contactService.contacts$;
    }
  }

  onSelectContact(id: string): void {
    const selectedContact = this.contactService.contacts.find((contact: Contact) => contact.id === id);
    if ( selectedContact ) {
      this.contactService.setCurrentContact(selectedContact);
    }
    this.dialogService.openEditDialog().afterClosed().pipe(
      takeUntil(this.destroy$)
    ).subscribe(result => this.showMessage(result))
  }

  openCreateContactDialog(): void {
    this.dialogService.openCreateDialog().afterClosed().pipe(
      takeUntil(this.destroy$)
    ).subscribe(result => this.showMessage(result))
  }

  openInfoContact(data: Contact): void {
    this.dialogService.openInfoDialog(data)
  }

  removeContact(id: string): void {
    this.contactService.removeContact(id);
    this.showMessage({ success: true, message: 'Contact removed successfully' });
  }

  private showMessage(result: { success: boolean, message: string }): void {
    if ( result && result.success ) {
      this.snackBar.open(result.message, 'Close', { duration: 3000 });
    }
  }

}
