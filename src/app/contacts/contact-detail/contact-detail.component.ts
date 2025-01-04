import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../types/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: [ './contact-detail.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Contact) {
  }

  ngOnInit(): void {
  }

}
