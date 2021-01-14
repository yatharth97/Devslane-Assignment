import {NgModule} from '@angular/core';
import {ProfileContainerComponent} from './containers/profile-container/profile-container.component';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {UsersRoutingModule} from "./users-routing.module";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfileContainerComponent,
    UserProfileComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule 
  ]
})
export class UsersModule {
}
