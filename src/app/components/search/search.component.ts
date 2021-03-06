import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService, Video } from '../../services/videos.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //heroesArray:Heroe[] = []; //Arreglo de Heroes
  videosArray:Video[] = []; //Arreglo de videos
  flagVacio:boolean = false;
  criterio:string;

  constructor( private activatedRoute: ActivatedRoute,
              private _videosService:VideosService,
              private _router:Router) {

    this.activatedRoute.params.subscribe( data => {

      //Recibe el array de heroes desde el servicio a partir del criterio
      //this.heroesArray = this._heroesService.buscarHeroe( data['criterio']); 
      this.videosArray = this._videosService.buscarVideo( data['criterio'] );
      //console.log(this.videosArray);
      this.criterio = data['criterio'];

      if(this.videosArray.length < 1) {
        this.flagVacio = true;
      }
      else {
        this.flagVacio = false;
      }

    })

  }

  ngOnInit() {

  }

  verVideo( ide:number ) {
    this._router.navigate(['/video',ide]);
  }

}
