import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetControle: ActionSheetController) { }

  ngOnInit() {
  }
  async exibir(){
    const actionSheet = await this.actionSheetControle.create({
      header: 'Fotos',
      buttons: [{
        text: 'Apagar',
        icon: 'trash',
        handler: ()=> {
          console.log('clicou em apagar');
        }
      },{
        text: 'Compartilhar',
        icon: 'share', 
        handler: ()=> {
          console.log('Clicou em compartilhar');
        }
      },{
        text: 'Exibir',
        icon: 'laptop',
        handler: ()=> {
          console.log('Clicou em exibir');
        }
      },{
        text: 'Favoritar',
        icon: 'heart',
        handler: ()=> {
          console.log('Clicou em Favoritar');
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        handler: ()=>{
          console.log('Clicou em cancelar');
        }
      }
      ]
      })
       
    
  
  actionSheet.present();
  }
}
