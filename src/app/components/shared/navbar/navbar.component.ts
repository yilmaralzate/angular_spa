import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titulo = 'Centro de soporte';

  constructor(private _router: Router) { }

  ngOnInit() {
    // nada que listar en este componente
  }

  buscarHeroe( dato:string ) {
    console.log(dato);
    //Aqui debo llamar el componente y pasarle el parametro. 
    //este metodo es el llamado desde el html de este componente
    this._router.navigate(['/search',dato]);
  }

  buscarVideo( dato:string ) {
    this._router.navigate( ['/search', dato] );
  }

  buscarVideoByCat( dato:string ) {
    this._router.navigate( ['/category', dato] );
  }

}
