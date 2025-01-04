import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { Contact } from '../types/contact';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(private readonly matDialog: MatDialog) {
  }

  openEditDialog(): MatDialogRef<EditContactComponent> {
    return this.matDialog.open(EditContactComponent, {
      width: '50vw',
      height: '60vh',
    });
  }

  openCreateDialog(): MatDialogRef<CreateContactComponent> {
    return this.matDialog.open(CreateContactComponent, {
      width: '50vw',
      height: '60vh',
    });
  }

  openInfoDialog(data: Contact): MatDialogRef<ContactDetailComponent> {
    return this.matDialog.open(ContactDetailComponent, {
      width: '50vw',
      height: '60vh',
      data
    });
  }

}
