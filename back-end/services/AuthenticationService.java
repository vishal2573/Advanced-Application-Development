package com.example.backend.services;

import java.util.Date;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.AuthenticationRequest;
import com.example.backend.dto.AuthenticationResponse;
import com.example.backend.dto.RegisterRequest;
import com.example.backend.model.User;
import com.example.backend.model.enumerate.Role;
import com.example.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository repo;

    public AuthenticationResponse register(RegisterRequest request) throws Exception {
        System.out.println(new Date(System.currentTimeMillis()));

        if (repo.existsByUsername(request.getUsername())) {
            return AuthenticationResponse.builder()
                    .message("Username already exists")
                    .build();
        }
        var user = User.builder()
                .name(request.getName())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();
        repo.save(user);
        int orgID = user.getId();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .id(orgID)
                .role(request.getRole())
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(), request.getPassword()));
        System.out.println("apply");

        var user = repo.findByUsername(request.getUsername())
                .orElseThrow();
        long orgID = user.getId();
        Role role = user.getRole();
        if (role.equals(request.getRole())) {
            System.out.println(role + " success " + request.getRole());

            var jwtToken = jwtService.generateToken(user);
            System.out.println(orgID);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .id(orgID)
                    .message("Login Successful")
                    .name(user.getName())
                    .role(request.getRole())
                    .build();
        }
        return AuthenticationResponse.builder()
                .message("Login Failed")
                .build();
    }

    public User getUserById(Long userId) {
        Optional<User> optionalUser = repo.findById(userId);

        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            return null;
        }

    }

}
