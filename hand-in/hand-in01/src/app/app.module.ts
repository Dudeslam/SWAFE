import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { CreditCardListItemComponent } from './home/credit-card-list-item/credit-card-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { CreditCardDetailsComponent } from './home/credit-card-details/credit-card-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreditCardListItemComponent,
    CreditCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
