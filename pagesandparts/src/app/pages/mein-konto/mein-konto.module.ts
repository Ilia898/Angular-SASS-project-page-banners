import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MeinKontoComponent } from './mein-konto.component';
import { AdressenComponent } from './adressen/adressen/adressen.component';
import { BestellungenComponent } from './bestellungen/bestellungen/bestellungen.component';
import { KontodetailsComponent } from './kontodetails/kontodetails/kontodetails.component';
import { PosteingangComponent } from './posteingang/posteingang/posteingang.component';

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

  ],
  declarations: [
    MeinKontoComponent,
    AdressenComponent,
    BestellungenComponent,
    KontodetailsComponent,
    PosteingangComponent,
  ],

  exports: [
    MeinKontoComponent,
    RouterModule
  ]
})
export class MeinKontoModule { }