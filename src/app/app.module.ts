import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListFilmsComponent } from './components/list-films/list-films.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LastMoviesComponent } from './components/last-movies/last-movies.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFilmsComponent,
    HomeComponent,
    LastMoviesComponent,
    MostPopularComponent,
    RegistroComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
