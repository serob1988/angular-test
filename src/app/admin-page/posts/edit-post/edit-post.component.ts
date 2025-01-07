import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
