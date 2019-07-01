import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from "./app.routes";
//Servicios
import {RestaurantsService} from './servicios/restaurants.service';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUlaRGw7-YIttWO1iAgtttksaUfuxISyY'
    })
  ],
  providers: [
    RestaurantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
