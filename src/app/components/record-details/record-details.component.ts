import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss'],
})
export class RecordDetailsComponent {
  address: string = '';

  constructor(
    public dialogRef: MatDialogRef<RecordDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.address = `${data.locAddress.streetNumber}, ${data.locAddress.street}, ${data.locAddress.city}`;
  }

  close(): void {
    this.dialogRef.close();
  }
}
