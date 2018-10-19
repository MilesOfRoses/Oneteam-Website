import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
//import all of my custom components again
import { headerComponent } from './header/app.headerComponent'; //  link it to the headerComponent class from app.headerComponents.ts
import { navComponent } from './nav/app.navComponent'; // link it to the navComponent class from app.navComponents.ts
import { contentAreaComponent } from './contentArea/app.contentAreaComponent'; 
import { FooterComponent } from './footer/app.footerComponent'; 
import { marketsComponent } from './markets/app.marketsComponent'; 

@NgModule({
  imports:      [ BrowserModule, 
                RouterModule.forRoot([
                  {
                    path: 'markets',
                    component: marketsComponent
                  },
                  {
                    path: '', //instead of a /, this must be left empty
                    component: contentAreaComponent
                  }
                ])
              ],
  declarations: [ AppComponent, headerComponent, navComponent, contentAreaComponent, FooterComponent, marketsComponent], //added all of my custom components (header, nav, etc...) to the declarations 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
