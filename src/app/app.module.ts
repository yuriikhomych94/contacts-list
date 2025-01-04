import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { CreateContactComponent } from './contacts/create-contact/create-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { SearchInputComponent } from './shared/components/search-input/search-input.component';
import { ContactsFormComponent } from './shared/components/contacts-form/contacts-form.component';
import { AppInitializerProvider } from './core/initializer/contact-data-initializer';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactDetailComponent,
    CreateContactComponent,
    EditContactComponent,
    SearchInputComponent,
    ContactsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [ AppInitializerProvider ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
