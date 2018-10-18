// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { VideosComponent } from './components/videos/videos.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    VideosComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING // El router debe ir en imports
  ],
  providers: [
    HeroesService // Aqui deben ir los servicios porque son proveedores de data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
