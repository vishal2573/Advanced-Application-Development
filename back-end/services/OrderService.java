package com.example.backend.services;

import com.example.backend.dto.OrderRequest;
import com.example.backend.dto.OrderResponse;
import com.example.backend.dto.ProductResponse;
import com.example.backend.model.Order;
import com.example.backend.model.Product;
import com.example.backend.repository.OrderRepository;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    public OrderResponse createOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setPrice(orderRequest.getTotalPrice());
        order.setQuantity(orderRequest.getQuantity());

        List<Product> products = new ArrayList<>();
        for (Long productId : orderRequest.getProductIds()) {
            Optional<Product> productOptional = productRepository.findById(productId);
            productOptional.ifPresent(products::add);
        }
        order.setProducts(products);

        Order savedOrder = orderRepository.save(order);
        return mapToOrderResponse(savedOrder);
    }

    public List<ProductResponse> getProductsByOrderId(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found with ID: " + orderId));
        return order.getProducts().stream()
                .map(this::mapToProductResponse)
                .collect(Collectors.toList());
    }

    private ProductResponse mapToProductResponse(Product product) {
        ProductResponse productResponse = new ProductResponse();
        productResponse.setProductId(product.getProductId());
        productResponse.setName(product.getName());

        productResponse.setPrice(product.getPrice());
        return productResponse;
    }

    private OrderResponse mapToOrderResponse(Order order) {
        OrderResponse orderResponse = new OrderResponse();
        orderResponse.setOrderId(order.getOrderId());
        orderResponse.setTotalPrice(order.getPrice());
        return orderResponse;
    }
}
