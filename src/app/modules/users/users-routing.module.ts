import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileContainerComponent } from "./containers/profile-container/profile-container.component";

const routes = [
    {path: '', component: ProfileContainerComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UsersRoutingModule {}