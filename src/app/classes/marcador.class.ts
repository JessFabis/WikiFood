export class Marcador{

    public lat: number;
    public lng:number;

    public titulo:string='sin título';
    public desc:string='sin descripción'

    constructor(lat:number , lng:number){
        this.lat=lat;
        this.lng=lng;
    }
    }
