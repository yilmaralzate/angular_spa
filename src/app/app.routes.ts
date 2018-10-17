import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Se carga con el snippet --> ngreouter

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { VideosComponent } from './components/videos/videos.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'videos', component: VideosComponent },
    { path: '**', component: HomeComponent }, //Si no es encontrada la pagina

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

/*
@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES)],
    exports: [RouterModule]
})
export class RoutesClass {
    constructor(){

    }
}
*/

//Forma de exportar la const para ser usada por el modulo principal app.module
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); 

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true }); 