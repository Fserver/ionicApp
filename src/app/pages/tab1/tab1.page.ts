import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista-model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DeseosService,
    private router: Router, public alertController: AlertController) { }

  async agregarLista() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Crear',
        handler: (data) => {
          if (data.titulo.lenght === 0) {
            return;
          }
          const listaId = this.deseosService.crearLista(data.titulo);
          console.log(listaId);
          this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);

        }
      }]
    });

    await alert.present();
  }
}
