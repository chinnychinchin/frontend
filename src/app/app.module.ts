import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemListCompComponent } from './components/item-list-comp.component';
import { ItemDetailsCompComponent } from './components/item-details-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListCompComponent,
    ItemDetailsCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
