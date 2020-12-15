import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {

  orderForm: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.orderForm.valid) {
      return this.alertSubmit();
    } else {
      return true;
    }
  }

  async alertSubmit() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Debe introducir todos los datos',
      buttons: ['OK']
    });

    await alert.present();
  }
}
