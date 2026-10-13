import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-comp',
  imports: [MatDialogModule],
  templateUrl: './confirm-comp.html',
  styleUrl: './confirm-comp.css',
})
export class ConfirmComp {
constructor(public dialogRef: MatDialogRef<ConfirmComp>) { }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
