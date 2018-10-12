import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-app-dialog",
  templateUrl: "./app-dialog.component.html",
  styleUrls: ["./app-dialog.component.css"]
})
export class AppDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}
}
