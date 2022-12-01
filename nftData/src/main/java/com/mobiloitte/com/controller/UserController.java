package com.mobiloitte.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobiloitte.com.model.User;
import com.mobiloitte.com.service.UserService;

@Controller
@RequestMapping
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public String register(Model model)
	{ 
		User user=new User();
		model.addAttribute("user",user);
		return "RegisterNFT";
	}
	
	@PostMapping("/registerUser")
	public String registerUser(@ModelAttribute("user") User user)
	{
		System.out.println(user);
		userService.registerUser(user);
		return "home";
	}
	
	
	
}
