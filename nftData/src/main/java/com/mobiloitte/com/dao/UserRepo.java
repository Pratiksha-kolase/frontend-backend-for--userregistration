package com.mobiloitte.com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiloitte.com.model.User;

public interface UserRepo extends JpaRepository<User, String> {

}
