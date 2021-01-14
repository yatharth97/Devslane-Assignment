import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileContainerComponent} from './containers/profile-container/profile-container.component';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {UsersRoutingModule} from "./users-routing.module";
import {MaterialModule} from "../material.module";


@NgModule({
  declarations: [
    ProfileContainerComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule {
}
