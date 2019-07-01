import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class RestaurantsService{

    constructor(private http: HttpClient){
        console.log("El servicio esta listo")
    }

    getAppiRestaurants(){

      return  this.http.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
        

    }
}