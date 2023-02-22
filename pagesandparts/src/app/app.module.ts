import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MeinKontoModule } from './pages/mein-konto/mein-konto.module';
import { AppRoutingModule } from './pages/app-routing.module';



import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';


registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    MeinKontoModule,
    AppRoutingModule
  ],

  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
