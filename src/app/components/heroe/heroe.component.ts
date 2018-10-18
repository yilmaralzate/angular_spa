import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( data => {
      console.log(data);
      console.log(data['id']); //Acceder al parametro['id'] o sea el parametro [ heroe/:id ]
    })

  }

  ngOnInit() {
  }

}
