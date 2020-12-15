package com.eliel.homeDeliveryApp.entity.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.eliel.homeDeliveryApp.entity.models.User;

public interface IUserDao extends JpaRepository<User, Long>{
	
}
