import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.cancionForm = this.fb.group({
      title: ["", Validators.required],
      body: [""]
    });
  }

  guardarCancion() {
    if (this.title.trim()) {
      this.db.list("/canciones").push({
        title: this.title,
        body: this.body
      });

      this.title = "";
      this.body = "";
    }
  }
}
