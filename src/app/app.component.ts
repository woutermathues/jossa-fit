import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(private menu : MenuController) {}

  onMenuClick(){
    console.log("geklikt");
    this.menu.close();
  }

  openSideNav(){
    this.menu.enable(true, 'menu-content');
    this.menu.open('menu-content');
  }
}
