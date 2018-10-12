import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialNavbarComponent } from "./material-navbar/material-navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
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
  MatCardModule,
  MatDialogModule,
  MatSpinner,
  MatProgressSpinnerModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";

import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { IndiceTableComponent } from "./indice-table/indice-table.component";
import { AppRoutingModule } from "./app-routing.module";
import { AgregarCancionComponent } from "./agregar-cancion/agregar-cancion.component";
import { AppComfirmComponent } from "./common/app-comfirm/app-comfirm.component";
import { AppDialogComponent } from "./common/app-dialog/app-dialog.component";
import { AppLoaderComponent } from "./common/app-loader/app-loader.component";
@NgModule({
  declarations: [
    AppComponent,
    MaterialNavbarComponent,
    IndiceTableComponent,
    AgregarCancionComponent,
    AppComfirmComponent,
    AppDialogComponent,
    AppLoaderComponent
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
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,

    AngularFireDatabaseModule,
    // To initialize AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppLoaderComponent, AppDialogComponent, AppComfirmComponent]
})
export class AppModule {}
