package com.eliel.homeDeliveryApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eliel.homeDeliveryApp.entity.dao.IUserDao;
import com.eliel.homeDeliveryApp.entity.models.User;

@Service
public class UserServiceImpl implements IUserService{
	
	@Autowired
	private IUserDao userDao;

	@Override
	public List<User> findAll() {
		return (List<User>) userDao.findAll();
	}

	@Override
	public Optional<User> findOne(long id) {
		return userDao.findById(id);
	}

	@Override
	public void deleteUser(long id) {
		userDao.deleteById(id);
	}

	@Override
	public User createUser(User user) {
		return userDao.save(user);
		
	}

	@Override
	public User updateUser(User user, long id) {
		Optional<User> userBD = userDao.findById(id);
		if(userBD.isPresent()){
			user.setId(userBD.get().getId());
		};
		return userDao.save(user);
	}

}
