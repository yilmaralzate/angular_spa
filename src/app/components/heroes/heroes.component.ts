import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
//Para usar el Router de Angular debemos importarlo para usar desde Button
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //Variable a ser exportada para *ngFor
  heroes:Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private _router: Router) {

  }
  
  //Se utiliza cuando la pagina está lista para ser utilizada por algun servicio o algun componente u otro...
  ngOnInit() { 

    this.heroes = this._heroesService.getHeroes(); //Para que se listen los heroes en el html
    console.log(this.heroes);

  }

  //Este llamado se implementa usando el Button en el Html, y se debe importar Router de @angular/router
  verHeroe( idx:number ) {
    this._router.navigate(['/heroe',idx]);
  }

}
