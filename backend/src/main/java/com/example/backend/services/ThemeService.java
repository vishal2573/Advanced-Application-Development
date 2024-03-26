package com.example.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import com.example.backend.dto.ThemeRequest;
import com.example.backend.dto.ThemeResponse;
import com.example.backend.model.Theme;
import com.example.backend.repository.ThemeRepository;
import com.example.backend.repository.ProductRepository;
import com.example.backend.model.Product;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ThemeService {

    @Autowired
    private ThemeRepository themeRepository;

    @Autowired
    private ProductRepository productRepository;

    public void createTheme(ThemeRequest themeDTO) {
        try {
            // Retrieve the product from the database
            Optional<Product> productOptional = productRepository.findById(themeDTO.getProductId());
            Product product = productOptional.orElseThrow(() -> new NotFoundException());

            // Create the theme and associate it with the product
            Theme theme = new Theme();
            theme.setName(themeDTO.getName());
            theme.setDescription(themeDTO.getDescription());
            theme.setProduct(product);

            // Save the theme
            themeRepository.save(theme);
        } catch (NotFoundException e) {
            // Handle the exception appropriately (e.g., log the error, throw a custom
            // exception, etc.)
            e.printStackTrace(); // Example: print the stack trace
        }
    }

    public void createThemes(List<ThemeRequest> themeDTOs) {
        themeDTOs.forEach(this::createTheme);
    }

    public List<ThemeResponse> getThemesByProductId(Long productId) {
        List<Theme> themes = themeRepository.findByProductProductId(productId);
        return themes.stream()
                .map(this::mapToThemeResponseDTO)
                .collect(Collectors.toList());
    }

    // Method to map Theme entity to ThemeResponse DTO
    private ThemeResponse mapToThemeResponseDTO(Theme theme) {
        ThemeResponse response = new ThemeResponse();
        response.setId(theme.getId());
        response.setName(theme.getName());
        response.setDescription(theme.getDescription());
        return response;
    }
}
