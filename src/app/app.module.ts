import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LlistaProductesComponent } from './components/llista-productes/llista-productes.component';
import { ProducteComponent } from './components/producte/producte.component';
import { IniciComponent } from './pagines/inici/inici.component';

@NgModule({
  declarations: [
    AppComponent,
    LlistaProductesComponent,
    ProducteComponent,
    IniciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
