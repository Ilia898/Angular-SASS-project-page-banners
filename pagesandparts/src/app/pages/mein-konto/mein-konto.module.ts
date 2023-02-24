import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MeinKontoComponent } from './mein-konto.component';
import { AdressenComponent } from './adressen/adressen.component';
import { BestellungenComponent } from './bestellungen/bestellungen.component';
import { KontodetailsComponent } from './kontodetails/kontodetails.component';
import { PosteingangComponent } from './posteingang/posteingang.component';
const routes: Routes = [
  {path: 'bestellung', component: BestellungenComponent},
  {path: 'adressen', component: AdressenComponent},
  {path: 'konto', component: KontodetailsComponent},
  {path: 'post', component: PosteingangComponent}

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,

  ],
  declarations: [
    MeinKontoComponent,
    AdressenComponent,
    BestellungenComponent,
    KontodetailsComponent,
    PosteingangComponent
  ],

  exports: [
    MeinKontoComponent,
    RouterModule
  ]
})
export class MeinKontoModule { }
