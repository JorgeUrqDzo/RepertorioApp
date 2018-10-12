import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndiceTableComponent } from "./indice-table/indice-table.component";
import { AgregarCancionComponent } from "./agregar-cancion/agregar-cancion.component";
import { RecientesComponent } from "./recientes/recientes.component";

const routes: Routes = [
  { path: "", component: IndiceTableComponent },
  { path: "agregar", component: AgregarCancionComponent },
  { path: "recientes", component: RecientesComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
