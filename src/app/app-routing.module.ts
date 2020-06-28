import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { HomeComponent } from './components/home/home.component';
import { LastMoviesComponent } from './components/last-movies/last-movies.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';



const routes: Routes = [

  //AQUI VAN LAS RUTASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
  //{path:"", redirectTo: "display", pathMatch: "full"},
  {path: "", component:HomeComponent},  
  {path: "allmovies", component:ListFilmsComponent},
  {path: "lastmovies", component:LastMoviesComponent},
  {path: "mostpopular", component:MostPopularComponent},
  {path: "signup", component:RegistroComponent},
  {path: "busqueda", component:BusquedaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
