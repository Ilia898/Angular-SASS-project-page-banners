import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { MeinKontoComponent } from './mein-konto/mein-konto.component';
import { NichtGefundenComponent } from './nicht-gefunden/nicht-gefunden.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';


const routes: Routes = [
  {path:'main', component: AppComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: '**', component: NichtGefundenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
