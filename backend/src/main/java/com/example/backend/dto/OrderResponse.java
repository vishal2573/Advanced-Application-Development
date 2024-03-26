package com.example.backend.dto;

import java.util.List;

import com.example.backend.model.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    private Long orderId;
    private List<Long> productIds;
    private List<Product> products;
    private int quantity;
    private double totalPrice;
}
