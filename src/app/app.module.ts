import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {SideNavContainerComponentComponent} from "./components/side-nav-container/side-nav-container.component";

@NgModule({
  declarations: [
    AppComponent,
    SideNavContainerComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
