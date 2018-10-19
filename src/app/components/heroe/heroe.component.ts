import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {}; //Disponible para acceder desde el html (Sabemos que es un array)

  constructor( private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe( data => {
      //console.log(data);
      //console.log(data['id']); //Acceder al parametro['id'] o sea el parametro [ heroe/:id ]
      
      //Guardo en mi array (heroe) los datos del heroe que obtengo a través del servicio a partir del 'id' registrado en 'routes'
      this.heroe = this._heroesService.getHeroe( data['id'] );
      // Se imprime para ver los atributos del array
      console.log(this.heroe = this._heroesService.getHeroe( data['id'] ));
    });

  }

}
