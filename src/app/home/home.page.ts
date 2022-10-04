import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navctrl: NavController) {}

  showPageDadospessoais(){
    this.navctrl.navigateForward('dadospessoais');
  }
  showPageNotas(){
    this.navctrl.navigateForward('notas');
  }

  showPageFinanceiro(){
    this.navctrl.navigateForward('financeiro');
  }

  showPageSair(){
    this.navctrl.navigateForward('sair');
  }

}
