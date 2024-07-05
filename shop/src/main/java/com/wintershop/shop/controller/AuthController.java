package com.wintershop.shop.controller;

import com.wintershop.shop.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        System.out.println("접속 성공");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
        );
        if (authentication.isAuthenticated()) {
            System.out.println("로그인 성공");
            return "Login successful";
        } else {
            System.out.println("로그인 실패");
            return "Login failed";
        }

    }

    @GetMapping("/login/success")
    public ResponseEntity<String> loginSuccess() {
        return ResponseEntity.ok("Login successful"); // Return JSON response here
    }
}
