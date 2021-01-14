import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes = [
    {
        path: '',
        loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
