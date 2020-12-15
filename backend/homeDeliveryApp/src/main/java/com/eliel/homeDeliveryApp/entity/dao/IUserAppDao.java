package com.eliel.homeDeliveryApp.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.eliel.homeDeliveryApp.entity.models.UserAppDao;

public interface IUserAppDao extends CrudRepository<UserAppDao, Long> {
	UserAppDao findByUsername(String username);
}