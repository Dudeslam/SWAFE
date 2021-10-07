import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreditCardListItemComponent } from './home/credit-card-list-item/credit-card-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardAddComponent } from './credit-card/credit-card-add/credit-card-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditCardListItemComponent,
    CreditCardAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
