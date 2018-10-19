import { Component, OnInit } from '@angular/core';
import { VideosService, Video } from '../../services/videos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos:Video[] = [];

  constructor(private _videosService:VideosService,
              private _router:Router) { }

  ngOnInit() {
    //Mostrar los videos utilizando el servicio y tenerlo disponible en el array videos
    this.videos = this._videosService.getVideos();
    console.log(this.videos);
  }

  verVideo( ide:number ) {
    this._router.navigate(['/video',ide]);
  }

}
