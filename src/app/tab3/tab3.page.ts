import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonAvatar, IonButton} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonAvatar, IonButton],
})
export class Tab3Page {
  disponible: boolean = true;

  nombre: string = 'Juan David Vargas Narvaez';
  carrera: string = 'Ingeniería de Software';
  correo: string = 'u20232216655@usco.edu.co';
  telefono: string = '3157806244';

  cambiarEstado() {
    this.disponible = !this.disponible;
  }
}
