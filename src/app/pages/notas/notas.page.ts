import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  constructor(private navctrl: NavController) {}

  ngOnInit() {
  }

  showPageMenu(){
    this.navctrl.navigateForward('home');
  }

  showPageDadosPessoais(){
    this.navctrl.navigateForward('dadospessoais');
  }

  showPageFinanceiro(){
    this.navctrl.navigateForward('financeiro');
  }

}
