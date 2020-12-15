package com.eliel.homeDeliveryApp.services;

import java.util.List;
import java.util.Optional;

import com.eliel.homeDeliveryApp.entity.models.Order;

public interface IOrderService {
	public List<Order> findAll();
	public Optional<Order> findOne(long numOrder);
	public void deleteOrder(long numOrder);
	public Order createOrder(Order order);
	public Order updateOrder(Order order, long numOrder);
}
