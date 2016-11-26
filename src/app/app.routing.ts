import { MyCompComponent } from './my-comp/my-comp.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ItemViewComponent } from './dashboard/items/item-view/item-view.component'



import { ParentComponent } from './parent/parent.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';


export const routes = RouterModule.forRoot([{ path: '', redirectTo: 'ParentComponent', pathMatch: 'full' },
    {
        path: 'ParentComponent', component: ParentComponent,
        children: [
            { path: '', redirectTo: 'DashboardComponent', pathMatch: 'full' },
            { path: 'DashboardComponent', component: DashboardComponent },
            { path: 'ItemViewComponent/:id', component: ItemViewComponent},
            { path: 'login', component: LoginComponent },
            { path: 'AboutComponent', component: AboutComponent },
                { path: 'MyCompComponent', component: MyCompComponent },
            { path: '**', redirectTo: 'seconddash', pathMatch: 'full' }
        ]
    },
     { path: 'PageNotFoundComponent', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'PageNotFoundComponent', pathMatch: 'full' }
  
    ]);