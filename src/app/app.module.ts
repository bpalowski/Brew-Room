import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { PotionListComponent } from './potion-list/potion-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PotionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
