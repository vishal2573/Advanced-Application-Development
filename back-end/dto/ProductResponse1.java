package com.example.backend.dto;

import java.util.List;

import com.example.backend.model.Theme;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse1 {

    private Long productId;
    private String name;
    private double price;
    private List<Theme> themes;
}
