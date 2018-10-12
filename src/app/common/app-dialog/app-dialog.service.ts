import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { AppDialogComponent } from "./app-dialog.component";
import { ComponentType } from "@angular/cdk/overlay/index";
import { AppComfirmComponent } from "../app-comfirm/app-comfirm.component";
import { Observable } from "rxjs";

interface DialogOptions {
  height?: string;
  width?: string;
  disableClose?: boolean;
  data?: any;
}

@Injectable({
  providedIn: "root"
})
export class AppDialogService {
  constructor(private dialog: MatDialog) {}

  public show(title: string, message: string) {
    let dialogRef: MatDialogRef<AppDialogComponent>;
    dialogRef = this.dialog.open(AppDialogComponent, {
      width: "480px",
      disableClose: true,
      data: { title, message }
    });

    return dialogRef.afterClosed();
  }

  public showComponent<T>(
    component: ComponentType<T>,
    options?: DialogOptions
  ) {
    return this.dialog.open(component, options).afterClosed();
  }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AppComfirmComponent>;
    dialogRef = this.dialog.open(AppComfirmComponent, {
      width: "480px",
      disableClose: true,
      data: { title, message }
    });
    return dialogRef.afterClosed();
  }

  public confirmUnsavedChanges() {
    return this.confirm(
      "Warning",
      "Tienes cambios sin guardar. ¿Estas seguro de continuar y perder estos cambios?"
    );
  }
}
