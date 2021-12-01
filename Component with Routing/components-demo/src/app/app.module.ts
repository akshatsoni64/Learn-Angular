import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: "", component: ContentComponent },
  { path: "home", component: ContentComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavSearchComponent,
    ContentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
