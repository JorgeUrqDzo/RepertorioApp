import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CancionesService } from "../canciones.service";
import { Cancion } from "../models/cancion";

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

  cancionForm: FormGroup;

  constructor(
    private db: AngularFireDatabase,
    private fb: FormBuilder,
    private cancionesService: CancionesService
  ) {}

  ngOnInit() {
    this.cancionForm = this.fb.group({
      title: ["", Validators.required],
      body: [""]
    });
  }

  guardarCancion() {
    if (this.title.trim()) {
      const cancion = new Cancion();
      cancion.title = this.title.toLowerCase();
      cancion.body = this.body.toLocaleLowerCase();

      this.cancionesService.add(cancion);

      this.cancionForm.reset();
    }
  }
}
