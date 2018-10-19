import { Component } from '@angular/core';

//import all of my custom components
import { headerComponent } from './header/app.headerComponent'; //link it to the headerComponent class from app.headerComponents.ts
import { navComponent } from './nav/app.navComponent'; // link it to the navComponent class from app.navComponents.ts
import { contentAreaComponent } from './contentArea/app.contentAreaComponent'; 
import { FooterComponent } from './footer/app.footerComponent'; 
import { marketsComponent } from './markets/app.marketsComponent'; 

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
})
export class AppComponent  { 



 }
