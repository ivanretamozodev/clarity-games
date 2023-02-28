import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
    { path: 'games', loadChildren: () => import('./modules/games/games.module').then((m) => m.GamesModule) },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
