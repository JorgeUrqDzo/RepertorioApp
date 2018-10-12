import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-app-comfirm",
  templateUrl: "./app-comfirm.component.html",
  styleUrls: ["./app-comfirm.component.css"]
})
export class AppComfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AppComfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
