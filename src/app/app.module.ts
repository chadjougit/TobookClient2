import { ItemsService } from './services/items.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { MyServService } from './my-comp/my-serv.service';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routes } from './app.routing';
import { ParentComponent } from './parent/parent.component';
import { ItemsComponent } from './dashboard/items/items.component';
import { ItemViewComponent } from './dashboard/items/item-view/item-view.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DashboardComponent,
    ParentComponent,
    ItemsComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, MyServService, ItemsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
