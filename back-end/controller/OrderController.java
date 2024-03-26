package com.example.backend.controller;

import com.example.backend.dto.OrderRequest;
import com.example.backend.dto.OrderResponse;
import com.example.backend.dto.ProductResponse;
import com.example.backend.services.OrderService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/order")
@PreAuthorize("hasRole('USER')")
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/post")
    @PreAuthorize("hasAuthority('user:create')")
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest orderRequest) {
        OrderResponse response = orderService.createOrder(orderRequest);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/products/get/{orderId}")
    @PreAuthorize("hasAuthority('user:read')")
    public ResponseEntity<List<ProductResponse>> getProductsByOrderId(@PathVariable Long orderId) {
        List<ProductResponse> products = orderService.getProductsByOrderId(orderId);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
