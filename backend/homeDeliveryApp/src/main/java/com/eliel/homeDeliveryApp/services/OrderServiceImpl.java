package com.eliel.homeDeliveryApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliel.homeDeliveryApp.entity.dao.IOrderDao;
import com.eliel.homeDeliveryApp.entity.models.Order;

@Service
public class OrderServiceImpl implements IOrderService{
	
	@Autowired
	private IOrderDao orderDao;

	@Override
	public List<Order> findAll() {
		return (List<Order>) orderDao.findAll();
	}

	@Override
	public Optional<Order> findOne(long numOrder) {
		return orderDao.findById(numOrder);
	}

	@Override
	public void deleteOrder(long numOrder) {
		orderDao.deleteById(numOrder);
	}

	@Override
	public Order createOrder(Order order) {
		return orderDao.save(order);
	}

	@Override
	public Order updateOrder(Order order, long numOrder) {
		Optional<Order> orderBD = orderDao.findById(numOrder);
		if(orderBD.isPresent()){
			order.setNumOrder(orderBD.get().getNumOrder());
		};
		return orderDao.save(order);
	}

}
