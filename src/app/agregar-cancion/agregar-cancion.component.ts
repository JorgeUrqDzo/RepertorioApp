import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CancionesService } from "../canciones.service";
import { Cancion } from "../models/cancion";
import { AppDialogService } from "../common/app-dialog/app-dialog.service";

@Component({
  selector: "app-agregar-cancion",
  templateUrl: "./agregar-cancion.component.html",
  styleUrls: ["./agregar-cancion.component.css"]
})
export class AgregarCancionComponent implements OnInit {
  public options: Object = {
    placeholderText: "Letra de la cancion ...",
    charCounterCount: false,
    height: 400
  };

  title = "";
  body = "";

  cancionesList: any[];

  cancionForm: FormGroup;

  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private cancionesService: CancionesService,
    private dialog: AppDialogService
  ) {}

  ngOnInit() {
    this.cancionForm = this.fb.group({
      title: ["", Validators.required],
      body: [""]
    });

    this.cancionesService.getAll().subscribe(items => {
      this.cancionesList = items;
    });
  }

  guardarCancion() {
    if (this.title.trim()) {
      const cancion = new Cancion();
      cancion.title = this.title.toLowerCase();
      cancion.body = this.body.toLocaleLowerCase();

      if (!this.checkExist(cancion.title)) {
        this.cancionesService.add(cancion);
        this.cancionForm.reset();
      } else {
        this.dialog
          .show(
            "Advertencia!!",
            "El nombre de la canción ya está registrado en el sistema. <br> Por favor elija otro."
          )
          .subscribe(res => {
            return false;
          });
      }
    }
  }

  checkExist(title): boolean {
    const total = this.cancionesList.find(c => c["title"] === title);
    return total ? true : false;
  }
}
