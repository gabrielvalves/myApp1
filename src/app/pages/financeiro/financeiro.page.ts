import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {

  constructor(private navctrl: NavController) {}

  ngOnInit() {
  }

  showPageMenu(){
    this.navctrl.navigateForward('home');
  }

  showPageDadosPessoais(){
    this.navctrl.navigateForward('dadospessoais');
  }

  showPageNotas(){
    this.navctrl.navigateForward('notas');
  }

}
