import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialNavbarComponent } from './material-navbar/material-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IndiceTableComponent } from './indice-table/indice-table.component';
import { AppRoutingModule } from './app-routing.module';
import { AgregarCancionComponent } from './agregar-cancion/agregar-cancion.component';
@NgModule({
  declarations: [
    AppComponent,
    MaterialNavbarComponent,
    IndiceTableComponent,
    AgregarCancionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    FormsModule,

    AngularFireDatabaseModule,
    // To initialize AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
