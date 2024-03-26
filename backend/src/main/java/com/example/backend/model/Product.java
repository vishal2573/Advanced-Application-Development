package com.example.backend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    private String name;
    private double price;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Theme> themes;

    @ManyToOne
    @JoinColumn(name = "order_orderid")
    private Order order;

    // Constructor to initialize themes list
    public Product(Long productId, String name, double price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.themes = new ArrayList<>();
    }

    public void addTheme(Theme theme) {
        themes.add(theme);
        theme.setProduct(this);
    }

    public void removeTheme(Theme theme) {
        themes.remove(theme);
        theme.setProduct(null);
    }
}
