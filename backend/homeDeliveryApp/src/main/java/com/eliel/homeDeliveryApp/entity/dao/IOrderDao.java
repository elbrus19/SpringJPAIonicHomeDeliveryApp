package com.eliel.homeDeliveryApp.entity.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.eliel.homeDeliveryApp.entity.models.Order;

public interface IOrderDao extends JpaRepository<Order, Long>{
}
