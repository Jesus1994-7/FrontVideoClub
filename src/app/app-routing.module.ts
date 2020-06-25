import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmsComponent } from './components/list-films/list-films.component';



const routes: Routes = [

  //AQUI VAN LAS RUTASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
  //{path:"", redirectTo: "display", pathMatch: "full"},  
  {path: "display", component:ListFilmsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
