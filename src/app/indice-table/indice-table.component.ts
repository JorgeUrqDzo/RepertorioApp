import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material";
import { IndiceTableDataSource } from "./indice-table-datasource";
import { AngularFireDatabase } from "angularfire2/database";
import { CancionesService } from "../canciones.service";
import { AppComfirmComponent } from "../common/app-comfirm/app-comfirm.component";
import { AppDialogService } from "../common/app-dialog/app-dialog.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Cancion } from "../models/cancion";

export interface IndiceTableItem {
  title: string;
  body: string;
  id: string;
}
@Component({
  selector: "app-indice-table",
  templateUrl: "./indice-table.component.html",
  styleUrls: ["./indice-table.component.css"]
})
export class IndiceTableComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: IndiceTableDataSource;

  result: any[];

  title = "";
  body = "";

  showLetra = false;
  editarCancion = false;

  cancionForm: FormGroup;

  busqueda = "";

  public options: Object = {
    placeholderText: "Letra de la cancion ...",
    charCounterCount: false,
    height: 400
  };

  constructor(
    private dialog: AppDialogService,
    private cancionesService: CancionesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.cancionForm = this.fb.group({
      title: ["", Validators.required],
      body: [""],
      key: [""]
    });

    this.getCanciones();
  }

  getCanciones() {
    this.cancionesService.getAll().subscribe(items => {
      this.result = items;
    });
  }

  verLetra(item) {
    this.showLetra = true;
    this.editarCancion = false;
    this.title = item.title;
    this.body = item.body;
  }

  verListaCancion() {
    this.showLetra = false;
    this.editarCancion = false;
  }

  edit(item) {
    this.showLetra = false;
    this.editarCancion = true;
    this.title = item.title;
    this.body = item.body;
    this.cancionForm.patchValue({
      key: item.key,
      title: item.title,
      body: item.body
    });
  }

  actualizarCancion() {
    if (this.title.trim()) {
      const cancion = new Cancion();
      cancion.title = this.title.toLowerCase();
      cancion.body = this.body;
      const id = this.cancionForm.controls["key"].value;
      if (!this.checkExist(cancion.title, id)) {
        this.cancionesService.update(id, cancion);
        this.cancionForm.reset();
        this.verListaCancion();
      } else {
        this.cancionExistenteDialog();
      }
    }
  }

  cancionExistenteDialog() {
    setTimeout(() => {
      this.dialog
        .show(
          "Advertencia!!",
          "El nombre de la canción ya está registrado en el sistema.  <br> Por favor elija otro."
        )
        .subscribe(res => {
          return false;
        });
    }, 500);
  }

  delete(item) {
    setTimeout(() => {
      this.dialog
        .confirm(
          "Confirmar Eliminar",
          "¿Estás seguro de eliminar la canción: <b>" + item.title.toUpperCase() + "</b> ?"
        )
        .subscribe(result => {
          if (result) {
            this.cancionesService.delete(item.key);
          }
        });
    }, 500);
  }

  buscar() {
    if (this.busqueda) {
      this.result = this.result.filter(f =>
        f.title.includes(this.busqueda.toLowerCase())
      );
    } else {
      this.getCanciones();
    }
  }

  checkExist(title, key): boolean {
    const total = this.result.find(
      c => c["title"] === title && c["key"] !== key
    );
    return total ? true : false;
  }
}
