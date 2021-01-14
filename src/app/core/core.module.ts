import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDrawerComponent } from './components/custom-drawer/custom-drawer.component';
import { CustomToolbarComponent } from './components/custom-toolbar/custom-toolbar.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CustomDrawerComponent,
    CustomToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CustomDrawerComponent,
    CustomToolbarComponent
  ]
})
export class CoreModule { }
