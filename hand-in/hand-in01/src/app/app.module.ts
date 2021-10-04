import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { CreditCardListItemComponent } from './home/credit-card-list-item/credit-card-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditCardListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
