import { Injectable } from '@angular/core';

@Injectable()
export class VideosService {

    private videos: Video[] = [
        {
            id: 1,
            link: "v2wRr7PoJx4",
            alias: "crear-cliente-1",
            nombre: "Crear un cliente nuevo, método 1",
            descripcion: "El proceso de crear un cliente nuevo es...",
            categoria: "liquida-pro",
            fecha_pub: "2018-10-20",
            cant_reproduc: 0,
            img: "assets/img/videopreview.png",
            keywords: "nuevo,cliente,registrar,cuenta nueva, nuevo cliente"
        },
        {
            id: 2,
            link: "v2wRr7PoJx4",
            alias: "crear-cliente-2",
            nombre: "Crear un cliente nuevo, método 2",
            descripcion: "El proceso de crear un cliente nuevo es...",
            categoria: "liquida-pro",
            fecha_pub: "2018-10-20",
            cant_reproduc: 0,
            img: "assets/img/videopreview.png",
            keywords: "nuevo,cliente,registrar,cuenta nueva,nuevo cliente,nueva venta"
        },
        {
            id: 3,
            link: "v2wRr7PoJx4",
            alias: "crear-credito-3",
            nombre: "Crear un credito nuevo, método 3",
            descripcion: "El proceso de crear un cliente nuevo es...",
            categoria: "liquida-pro",
            fecha_pub: "2018-10-20",
            cant_reproduc: 0,
            img: "assets/img/videopreview.png",
            keywords: "nuevo,cliente,registrar,cuenta nueva,nuevo cliente,nueva venta"
        },
        {
            id: 4,
            link: "v2wRr7PoJx4",
            alias: "liquidar-ruta",
            nombre: "Liquidar ruta",
            descripcion: "El proceso de liquidar una ruta es...",
            categoria: "liquida-master",
            fecha_pub: "2018-10-20",
            cant_reproduc: 0,
            img: "assets/img/videopreview.png",
            keywords: "liquidar,liquidar ruta, liquidacion, cuadre, caja, base"
        },
        {
            id: 5,
            link: "v2wRr7PoJx4",
            alias: "crear-cliente-5",
            nombre: "Crear un cliente nuevo, método 5",
            descripcion: "El proceso de crear un cliente nuevo es...",
            categoria: "liquida-pro",
            fecha_pub: "2018-10-20",
            cant_reproduc: 0,
            img: "assets/img/videopreview.png",
            keywords: "nuevo,cliente,registrar,cuenta nueva,nuevo cliente,nueva venta"
        }
    ];

    constructor() {
        console.log('Servicio videos, listo!');
    }

    getVideos() {
        return this.videos;
    }

    getVideo( id_search:number ){

        let video:Video;
        for (let iterator of this.videos) {
            if(iterator.id == id_search) {
                video = iterator;
            }
        }
        return video;
    }

    getVideosByCat( categoria:string ) {

        let videosArray:Video[] = [];

        for (let iterator of this.videos) {
            let categ = iterator.categoria.toLowerCase();
            if(categ.indexOf(categoria) >= 0) {
                videosArray.push( iterator );
            }
        }
       /*
       for (let iterator of this.videos) {
           if(iterator.categoria == categoria)
           {
               videosArray.push( iterator );
           }
       }
       */
        return videosArray;
    }
    
    buscarVideo( criterio:string ){

        let videosArray:Video[] = [];
        for (let iterator of this.videos) {
            let nombre = iterator.nombre.toLowerCase();
            //let keys = iterator.keywords.split(",");
            //if(nombre.indexOf(criterio) >= 0 || keys.includes(criterio.toLowerCase())) {
            if(nombre.indexOf(criterio) >= 0 || iterator.keywords.indexOf(criterio) >= 0) {
                videosArray.push( iterator );
            }
        }
        return videosArray;
    }

}

export interface Video {
    id: number;
    link: string;
    alias: string;
    nombre: string;
    descripcion: string;
    categoria: string;
    fecha_pub: string;
    cant_reproduc: number;
    img: string;
    keywords: string;
}