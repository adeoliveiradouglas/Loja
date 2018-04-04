import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titulo: string = 'Rosarium Artes';


  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

}
