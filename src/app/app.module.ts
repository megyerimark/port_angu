import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './Nav/navbar/navbar.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
