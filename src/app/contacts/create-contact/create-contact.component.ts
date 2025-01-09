import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ContactsFormComponent } from '../../shared/components/contacts-form/contacts-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateContactComponent implements OnInit {

  @ViewChild(ContactsFormComponent) formComponent!: ContactsFormComponent;

  constructor(private dialogRef: MatDialogRef<CreateContactComponent>,
              private contactService: ContactsService) {
  }

  ngOnInit(): void {
  }


  onCreateContact(): void {
    this.contactService.addContact(this.formComponent.form.value);
    this.dialogRef.close({ success: true, message: 'Contact created successfully' });
    this.formComponent.form.reset();
  }

}
