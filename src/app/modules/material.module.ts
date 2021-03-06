import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ResponsiveRowsDirective } from '../core/directives/responsive-rows.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResponsiveRowsDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  exports:[
    ResponsiveRowsDirective,

    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ]
})
export class MaterialModule { }
