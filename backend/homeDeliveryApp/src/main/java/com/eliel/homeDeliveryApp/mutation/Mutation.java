package com.eliel.homeDeliveryApp.mutation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.eliel.homeDeliveryApp.entity.models.Order;
import com.eliel.homeDeliveryApp.entity.models.User;
import com.eliel.homeDeliveryApp.services.IOrderService;
import com.eliel.homeDeliveryApp.services.IUserService;

@Component
public class Mutation implements GraphQLMutationResolver {

	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private IUserService userService;
	
	public Order createOrder(String dateOrder, String dateDelivery, String status, String description) {
		Order order = new Order(dateOrder, dateDelivery, status, description);
		return orderService.createOrder(order);
	}
	
	public User createUser(String name, String surname1, String surname2, int tlfn, String email, String password,
			String address) {
		User user = new User(name, surname1, surname2, tlfn, email, password, address);
		return userService.createUser(user);
	}
	
	public Order updateOrder(long numOrder, String dateOrder, String dateDelivery, String status, String description) {
		Order order = new Order(dateOrder, dateDelivery, status, description);
		return orderService.updateOrder(order, numOrder);
	}
	
	public User updateUser(long id, String name, String surname1, String surname2, int tlfn, String email, String password,
			String address) {
		User user = new User(name, surname1, surname2, tlfn, email, password, address);
		return userService.updateUser(user, id);
		
	}
	
	public boolean deleteOrder(long numOrder) {
		orderService.deleteOrder(numOrder);
		return true;
	}
	
	public boolean deleteUser(long id) {
		userService.deleteUser(id);
		return true;
	}
}
