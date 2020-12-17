package com.eliel.homeDeliveryApp.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eliel.homeDeliveryApp.entity.models.UserAppDao;

public interface IUserAppDao extends JpaRepository<UserAppDao, Long> {
	UserAppDao findByUsername(String username);
}