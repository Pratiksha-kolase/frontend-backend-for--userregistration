package com.mobiloitte.com.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mobiloitte.com.dao.UserRepo;
import com.mobiloitte.com.model.User;
import com.mobiloitte.com.service.UserService;

@Service
public class UserImpl implements UserService{
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public void registerUser(User user) {
	 userRepo.save(user);
	}

}
