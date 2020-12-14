import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Order } from '../models/order';
import { AlertController } from '@ionic/angular';
import { OrderService } from '../services/order.service';

const GET_ORDERS = gql`
query{
  allOrders{
    numOrder,
    dateOrder,
    dateDelivery,
    status,
    description
  }
}
`;
const DELETE_ORDERS = gql`
mutation ($numOrder: ID){
  deleteOrder(
     numOrder: $numOrder
   )
 }
  `;

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.page.html',
  styleUrls: ['./list-orders.page.scss'],
})
export class ListOrdersPage implements OnInit {

  orders: Order[];

  constructor(private apollo: Apollo, private router: Router, public alertController: AlertController, private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  ionViewWillEnter() {
    this.getOrders();
  }

  getOrders() {
    this.apollo
      .watchQuery({
        query: GET_ORDERS
      })
      .valueChanges.subscribe((result: any) => {
        this.orders = result.data.allOrders;
        console.log(this.orders)
      }), err => {
        this.presentAlert("Submit error");
      };
  }

  deleteOrder(numOrder: number) {
    this.apollo.mutate({
      mutation: DELETE_ORDERS,
      variables: {
        numOrder: numOrder
      }
    }).subscribe((res) => {
      this.deleteAlert();
      this.router.navigateByUrl("/list-orders");
      this.getOrders();
    }), err => {
      this.presentAlert("Submit error");
    };
  }

  insertOrder() {
    this.router.navigateByUrl("/add-order");
  }

  editOrder(numOrder: number) {
    this.router.navigateByUrl("/update-order");
    this.orderService.setNumOrder(numOrder);
  }

  async deleteAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Pedido Eliminado',
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
