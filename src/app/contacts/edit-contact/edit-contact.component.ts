import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../core/base/base.component';
import { ContactsFormComponent } from '../../shared/components/contacts-form/contacts-form.component';
import { ContactsService } from '../services/contacts.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditContactComponent extends BaseComponent implements OnInit {

  @ViewChild(ContactsFormComponent) formComponent!: ContactsFormComponent;

  constructor(public readonly contactService: ContactsService,
              private readonly dialogRef: MatDialogRef<EditContactComponent>) {
    super();
  }

  ngOnInit(): void {
  }

  onSaveChange(): void {
      const updatedContact = {
        ...this.contactService.currentContact,
        ...this.formComponent.form.value,
      };

      this.contactService.applyContactChanges(updatedContact);
      this.dialogRef.close({ success: true, message: 'Contact updated successfully' });
  }

}
