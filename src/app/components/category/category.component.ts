import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService, Video } from '../../services/videos.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  videosArray:Video[] = []; //Arreglo de videos
  flagVacio:boolean = false;
  categoria:string;

  constructor( private activatedRoute: ActivatedRoute,
              private _videosService:VideosService,
              private _router:Router) { 

      this.activatedRoute.params.subscribe( data => {
  
        //Recibe el array de heroes desde el servicio a partir del criterio
        //this.heroesArray = this._heroesService.buscarHeroe( data['criterio']); 
        this.videosArray = this._videosService.getVideosByCat( data['categoria'] );
        console.log(this.videosArray);
        this.categoria = data['categoria'];
        //console.log("Categoria leida: "+this.categoria);
  
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
