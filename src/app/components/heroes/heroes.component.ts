import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor(private _heroesService: HeroesService) {

  }
  
  //Se utiliza cuando la pagina está lista para ser utilizada por alguna servicio o algun componente u otro...
  ngOnInit() { 

    this.heroes = this._heroesService.getHeroes();

  }

}
