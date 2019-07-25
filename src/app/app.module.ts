import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageFoundComponent } from './page-found/page-found.component';
import { HomeComponent } from './home/home.component';
@NgModule({
    declarations:[
    AppComponent,
    FirstpageComponent,
    CardViewComponent,
    routingComponents,
    PageNotFoundComponent,
    PageFoundComponent,    
    HomeComponent
  ],
    imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
    providers: [CommonService],
    bootstrap: [AppComponent]
})

export class AppModule { }
