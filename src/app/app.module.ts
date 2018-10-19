// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';
import { VideosService } from './services/videos.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { VideosComponent } from './components/videos/videos.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    VideosComponent,
    HeroeComponent,
    SearchComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING // El router debe ir en imports
  ],
  providers: [
    VideosService,
    HeroesService // Aqui deben ir los servicios porque son proveedores de data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
