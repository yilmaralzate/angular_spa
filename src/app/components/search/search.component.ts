import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroesArray:Heroe[] = []; //Arreglo de Heroes
  flagVacio:boolean = false;
  criterio:string;

  constructor( private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( data => {

      //Recibe el array de heroes desde el servicio a partir del criterio
      this.heroesArray = this._heroesService.buscarHeroe( data['criterio']); 
      console.log(this.heroesArray);
      this.criterio = data['criterio'];

      if(this.heroesArray.length < 1) {
        this.flagVacio = true;
      }
      else {
        this.flagVacio = false;
      }

    })

  }

  ngOnInit() {

  }
}
