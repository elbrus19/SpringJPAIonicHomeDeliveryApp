package com.eliel.homeDeliveryApp.services;

import java.util.List;
import java.util.Optional;

import com.eliel.homeDeliveryApp.entity.models.User;

public interface IUserService {
	public List<User> findAll();
	public Optional<User> findOne(long id);
	public void deleteUser(long id);
	public User createUser(User user);
	public User updateUser(User user, long id);
}
