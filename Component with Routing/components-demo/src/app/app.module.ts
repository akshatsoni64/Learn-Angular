import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavSearchComponent } from './nav-search/nav-search.component';

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "home", component: AppComponent },
  { path: "about", component: AppComponent },
  { path: "contact", component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavItemComponent,
    NavSearchComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
