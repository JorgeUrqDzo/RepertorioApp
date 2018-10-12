import { Injectable } from "@angular/core";
import { AppLoaderComponent } from "./app-loader.component";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppLoaderService {
  dialogRef: MatDialogRef<AppLoaderComponent>;
  constructor(private dialog: MatDialog) {}

  public open(title: string = "Please wait"): Observable<boolean> {
    this.dialogRef = this.dialog.open(AppLoaderComponent, {
      disableClose: true
    });
    this.dialogRef.updateSize("200px");
    this.dialogRef.componentInstance.title = title;
    return this.dialogRef.afterClosed();
  }

  public close() {
    this.dialogRef.close();
  }

  public closeAll() {
    this.dialog.closeAll();
  }
}
