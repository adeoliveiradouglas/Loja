import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-novavenda',
  templateUrl: 'novavenda.html',
})
export class NovavendaPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovavendaPage');
  }

  confirmaVenda(){
    const alerta = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja confirmar a venda?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não confirmou');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.registrarVendaNoBanco();
            console.log('Confimado');
          }
        }
      ]
    });

    alerta.present();
  } //fim do confirmar Venda

  registrarVendaNoBanco(){//manda os dados para o banco e depois confirma
    const alerta = this.alertCtrl.create({
      title: 'Registrado',
      message: 'Pronto. A venda foi registrada',
      buttons: ['Ok']
    });
    alerta.present();
  }
}
