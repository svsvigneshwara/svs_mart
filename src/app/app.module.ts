import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations:[
    AppComponent,
    FirstpageComponent,
    CardViewComponent
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
