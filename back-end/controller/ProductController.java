package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.ProductRequest;
import com.example.backend.dto.ProductResponse;
import com.example.backend.services.ProductService;

import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/admin/products")
@PreAuthorize("hasRole('ADMIN')")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/post")
    @PreAuthorize("hasAuthority('admin:create')")
    public ResponseEntity<ProductResponse> createProduct(@RequestBody ProductRequest productRequestDTO) {
        ProductResponse createdProduct = productService.createProduct(productRequestDTO);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

}
