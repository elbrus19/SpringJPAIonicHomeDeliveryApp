import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  numOrder: number;
  dateOrder: String;
  dateDelivery: String;
  status: String;
  description: String;

  constructor() { }

  setNumOrder(numOrder: number) {
    this.numOrder = numOrder;
  }

  getNumOrder(): number {
    return this.numOrder;

  }

  setDateOrder(dateOrder: String) {
    this.dateOrder = dateOrder;
  }

  getDateOrder(): String {
    return this.dateOrder;
  }

  setDateDelivery(dateDelivery: String) {
    this.dateDelivery = dateDelivery;
  }

  getDateDelivery(): String {
    return this.dateDelivery;
  }

  setStatus(status: String) {
    this.status = status;
  }

  getStatus(): String {
    return this.status;
  }

  setDescription(description: String) {
    this.description = description;
  }

  getDescription(): String {
    return this.description;
  }
}
