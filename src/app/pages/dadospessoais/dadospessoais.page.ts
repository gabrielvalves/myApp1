import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-dadospessoais',
  templateUrl: './dadospessoais.page.html',
  styleUrls: ['./dadospessoais.page.scss'],
})
export class DadospessoaisPage implements OnInit {

  constructor(private navctrl: NavController) {}

  ngOnInit() {
  }

  showPageMenu(){
    this.navctrl.navigateForward('home');
  }

  showPageNotas(){
    this.navctrl.navigateForward('notas');
  }

  showPageFinanceiro(){
    this.navctrl.navigateForward('financeiro');
  }

}
