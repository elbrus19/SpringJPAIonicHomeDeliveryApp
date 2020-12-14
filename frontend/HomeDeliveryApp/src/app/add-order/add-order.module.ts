import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddOrderPageRoutingModule } from './add-order-routing.module';

import { AddOrderPage } from './add-order.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddOrderPageRoutingModule
  ],
  declarations: [AddOrderPage]
})
export class AddOrderPageModule {}
