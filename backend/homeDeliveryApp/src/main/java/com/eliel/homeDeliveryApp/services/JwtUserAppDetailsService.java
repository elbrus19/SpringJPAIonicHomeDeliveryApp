package com.eliel.homeDeliveryApp.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.eliel.homeDeliveryApp.entity.dao.IUserAppDao;
import com.eliel.homeDeliveryApp.entity.models.UserAppDao;
import com.eliel.homeDeliveryApp.entity.models.UserAppDto;

@Service
public class JwtUserAppDetailsService implements UserDetailsService {
	
	@Autowired
	private IUserAppDao userAppDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserAppDao user = userAppDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	public UserAppDao save(UserAppDto user) {
		UserAppDao newUser = new UserAppDao();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userAppDao.save(newUser);
	}
}
