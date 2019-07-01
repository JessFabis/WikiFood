import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../servicios/restaurants.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
 
  dataRestaurants:any[]=[];
  constructor( private _restaurantsService:RestaurantsService) { 

    this._restaurantsService.getAppiRestaurants()
    .subscribe( (data:any) =>{
        console.log(data);
        data.sort((a,b) => a.name.localeCompare(b.name));
        this.dataRestaurants= data;
        
        
 
        
    });
   
  }

  ngOnInit() {
  }

}
