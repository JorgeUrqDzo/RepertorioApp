import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireAction } from "angularfire2/database";
import { Observable } from "rxjs";
import { Cancion } from "./models/cancion";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CancionesService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db
      .list("/canciones/")
      .snapshotChanges()
      .pipe(map(c => c.map(a => ({ key: a.key, ...a.payload.val() }))));
  }

  getRecent() {
    return this.db
      .list("/canciones/", ref => ref.limitToLast(5))
      .snapshotChanges()
      .pipe(map(c => c.map(a => ({ key: a.key, ...a.payload.val() }))));
  }

  add(cancion: Cancion) {
    return this.db.list("/canciones/").push(cancion);
  }

  update(id, cancion: Cancion) {
    return this.db.object("/canciones/" + id).update(cancion);
  }

  delete(id) {
    return this.db.object("/canciones/" + id).remove();
  }
}
