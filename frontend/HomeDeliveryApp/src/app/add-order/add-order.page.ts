import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AlertController } from '@ionic/angular';

const CREATE_ORDER = gql`
mutation ($dateOrder: String, $dateDelivery: String, $status: String, $description: String){
  createOrder(
    dateOrder: $dateOrder,
    dateDelivery: $dateDelivery,
    status: $status,
    description: $description
   ){
    dateOrder dateDelivery status description
   }
 }
  `;

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})
export class AddOrderPage implements OnInit {

  orderForm: FormGroup;

  constructor(private apollo: Apollo,
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController) {
    this.orderForm = this.fb.group({
      dateOrder: new FormControl('', Validators.required),
      dateDelivery: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.orderForm.valid) {
      return this.alertSubmit();
    } else {
      this.createAlert().then(() => {
        this.apollo.mutate({
          mutation: CREATE_ORDER,
          variables: {
            dateOrder: this.orderForm.value.dateOrder,
            dateDelivery: this.orderForm.value.dateDelivery,
            status: this.orderForm.value.status,
            description: this.orderForm.value.description
          }
        }).subscribe((res) => {
          this.orderForm.reset();
          this.router.navigateByUrl("/list-orders");
        }), err => {
          this.presentAlert("Submit error");
        };
      });
    }
  }

  async createAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Pedido Creado',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertSubmit() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Debe introducir todos los datos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert(errorMessage: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: errorMessage,
      buttons: ['OK']
    });

    await alert.present();
  }
}
