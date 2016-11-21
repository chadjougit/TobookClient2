import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import {MyServService} from './my-comp/my-serv.service'

@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
