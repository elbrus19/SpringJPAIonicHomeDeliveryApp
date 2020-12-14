import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AlertController } from '@ionic/angular';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { Console } from 'console';

const UPDATE_ORDER = gql`
mutation ($numOrder: ID, $dateOrder: String, $dateDelivery: String, $status: String, $description: String){
  updateOrder(
    numOrder: $numOrder,
    dateOrder: $dateOrder,
    dateDelivery: $dateDelivery,
    status: $status,
    description: $description
   ){
    dateOrder dateDelivery status description
   }
 }
  `;

  const ORDER = gql`
query order($numOrder: ID){
  order(numOrder: $numOrder) {
    numOrder,
    dateOrder,
    dateDelivery,
    status,
    description
  }
}
`;

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.page.html',
  styleUrls: ['./update-order.page.scss'],
})
export class UpdateOrderPage implements OnInit {

  updateOrderForm: FormGroup;
  orders: Order[];
  numOrder: any;

  constructor(private apollo: Apollo,
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController,
    private orderService: OrderService) {
    this.updateOrderForm = this.fb.group({
      dateOrder: new FormControl('', Validators.required),
      dateDelivery: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    let id = this.orderService.getNumOrder();
    console.log(id);
    this.apollo
      .watchQuery({
        query: ORDER,
        variables: {
          numOrder: id,
        },
      })
      .valueChanges.subscribe((result: any) => { 
        this.orders = result.data.order;
        console.log(this.orders);
        this.numOrder = result.data.order.numOrder;
        
        this.updateOrderForm = this.fb.group({
            dateOrder: result.data.order.dateOrder,
            dateDelivery: result.data.order.dateDelivery,
            status: result.data.order.status,
            description: result.data.order.description
        });
      });
  }

  onFormSubmit() {
    if (!this.updateOrderForm.valid) {
      return this.alertSubmit();
    } else {
        this.apollo.mutate({
          mutation: UPDATE_ORDER,
          variables: {
            numOrder: this.numOrder,
            dateOrder: this.updateOrderForm.value.dateOrder,
            dateDelivery: this.updateOrderForm.value.dateDelivery,
            status: this.updateOrderForm.value.status,
            description: this.updateOrderForm.value.description
          }
        }).subscribe((res) => {
          this.updateOrderForm.reset();
          this.updateAlert();
          this.router.navigateByUrl("/list-orders");
        }), err => {
          this.presentAlert("Submit error");
        };
    }
  }

  async updateAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Pedido Actualizado',
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
