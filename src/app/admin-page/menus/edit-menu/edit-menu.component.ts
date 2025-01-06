import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrl: './edit-menu.component.css'
})
export class EditMenuComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
