import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { RestaurantsService } from '../../servicios/restaurants.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  marcadores:Marcador []=[];
  dataRestaurants:any[]=[];

  title: string = 'My first AGM project';
  lat: number = 19.440057053713137;
  lng: number = -99.12704709742486;
  

  constructor(private _restaurantsService:RestaurantsService) { 

  const nuevoMarcador = new Marcador(19.440057053713137, -99.12704709742486);
  

  this.marcadores.push(nuevoMarcador);
}

  ngOnInit() {
  }
  agregarMarcador(evento){

    const coords:{lat:number, lng:number}=evento.coords;


    const nuevoMarcador = new Marcador(coords.lat,coords.lng);
  

  this.marcadores.push(nuevoMarcador);
  }
}
