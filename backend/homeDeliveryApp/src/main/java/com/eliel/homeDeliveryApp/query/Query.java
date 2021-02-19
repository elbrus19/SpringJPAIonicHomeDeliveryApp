package com.eliel.homeDeliveryApp.query;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.eliel.homeDeliveryApp.entity.models.Order;
import com.eliel.homeDeliveryApp.entity.models.User;
import com.eliel.homeDeliveryApp.services.EmailService;
import com.eliel.homeDeliveryApp.services.IOrderService;
import com.eliel.homeDeliveryApp.services.IUserService;
import com.eliel.homeDeliveryApp.services.ReportService;


@Component
public class Query implements GraphQLQueryResolver{
	
	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private IUserService userService;
	
	@Autowired
	private ReportService reportService;
	
	@Autowired
	private EmailService emailService;
	
	public Optional<Order> getOrder(long numOrder) {
		return orderService.findOne(numOrder);
	}
	
	public List<Order> getAllOrders(){
		return orderService.findAll();
	}
	
	public Optional<User> getUser(long id) {
		return userService.findOne(id);
	}
	
	public List<User> getAllUsers(){
		return userService.findAll();
	}
	
	public boolean exportReport() {
		reportService.exportReport();
		return true;
	}
	
	public boolean sendMail() {
		emailService.sendMail();
		return true;
	}
}
