import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService, Video } from '../../services/videos.service';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  video:any = {}; //Es un array el video

  constructor(private activatedRoute:ActivatedRoute,
              private _videosService:VideosService) {

    this.activatedRoute.params.subscribe( data => {
      //console.log(data);
      //console.log(data['id']); //Acceder al parametro['id'] o sea el parametro [ video/:id ]
      
      //Guardo en mi array (heroe) los datos del heroe que obtengo a través del servicio a partir del 'id' registrado en 'routes'
      this.video = this._videosService.getVideo( data['id'] );
      // Se imprime para ver los atributos del array
      console.log(this.video = this._videosService.getVideo( data['id'] ));
    });

  }

  ngOnInit() {
  }

}
