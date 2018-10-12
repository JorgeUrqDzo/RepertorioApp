import { Component, OnInit } from "@angular/core";
import { CancionesService } from "../canciones.service";

@Component({
  selector: "app-recientes",
  templateUrl: "./recientes.component.html",
  styleUrls: ["./recientes.component.css"]
})
export class RecientesComponent implements OnInit {
  result: any;

  constructor(private cancionesService: CancionesService) {}

  ngOnInit() {
    this.cancionesService.getRecent().subscribe(items => {
      this.result = items;
    });
  }
}
