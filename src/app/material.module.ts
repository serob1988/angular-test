import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [

   
  ],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
    
],
  exports: [
    MatButtonModule, 
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
],

})
export class MaterialModule { }