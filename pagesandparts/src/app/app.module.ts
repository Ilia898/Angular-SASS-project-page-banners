import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MeinKontoModule } from './pages/mein-konto/mein-konto.module';
import { AppRoutingModule } from './pages/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { NichtGefundenComponent } from './pages/nicht-gefunden/nicht-gefunden.component';
import { WarenkorbComponent } from './pages/warenkorb/warenkorb.component';
import { EditorModule } from './pages/editor/editor.module';
import { EditorSmModule } from './pages/editor copy/editor-sm.module';


registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NichtGefundenComponent,
    WarenkorbComponent,

   ],

  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    MeinKontoModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EditorModule,
    EditorSmModule

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
