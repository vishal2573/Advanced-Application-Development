package com.example.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.ProductRequest;
import com.example.backend.dto.ProductResponse;
import com.example.backend.dto.ThemeRequest;
import com.example.backend.dto.ThemeResponse;
import com.example.backend.model.Product;
import com.example.backend.model.Theme;
import com.example.backend.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public ProductResponse createProduct(ProductRequest productRequestDTO) {
        Product product = new Product();
        product.setName(productRequestDTO.getName());
        product.setPrice(productRequestDTO.getPrice());

        // Initialize the themes list
        product.setThemes(new ArrayList<>());

        List<ThemeRequest> themeRequestDTOs = productRequestDTO.getThemes();
        if (themeRequestDTOs != null) {
            for (ThemeRequest themeRequestDTO : themeRequestDTOs) {
                Theme theme = new Theme();
                theme.setName(themeRequestDTO.getName());
                theme.setDescription(themeRequestDTO.getDescription());
                product.addTheme(theme);
            }
        }

        Product savedProduct = productRepository.save(product);
        return mapToProductResponseDTO(savedProduct);
    }

    private ProductResponse mapToProductResponseDTO(Product product) {
        ProductResponse productResponseDTO = new ProductResponse();
        productResponseDTO.setProductId(product.getProductId());
        productResponseDTO.setName(product.getName());
        productResponseDTO.setPrice(product.getPrice());

        List<ThemeResponse> themeResponseDTOs = new ArrayList<>();
        List<Theme> themes = product.getThemes();
        if (themes != null) {
            for (Theme theme : themes) {
                ThemeResponse themeResponseDTO = new ThemeResponse();
                themeResponseDTO.setId(theme.getThemeId());
                themeResponseDTO.setName(theme.getName());
                themeResponseDTO.setDescription(theme.getDescription());
                themeResponseDTOs.add(themeResponseDTO);
            }
        }
        productResponseDTO.setThemes(themeResponseDTOs);

        return productResponseDTO;
    }
}
