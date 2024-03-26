package com.example.backend.controller;

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

import com.example.backend.dto.ThemeRequest;
import com.example.backend.dto.ThemeResponse;
import com.example.backend.services.ThemeService;

@RestController
@RequestMapping("/api/admin/themes")
@PreAuthorize("hasRole('ADMIN')")
public class ThemeController {
    @Autowired
    ThemeService themeService;

    @PostMapping("/post")
    @PreAuthorize("hasAuthority('admin:create')")
    public ResponseEntity<Void> createThemes(@RequestBody List<ThemeRequest> themeDTOs) {
        themeService.createThemes(themeDTOs);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/get/{productId}")
    @PreAuthorize("hasAuthority('admin:read')")
    public ResponseEntity<List<ThemeResponse>> getThemesByProductId(@PathVariable Long productId) {
        List<ThemeResponse> themes = themeService.getThemesByProductId(productId);
        return new ResponseEntity<>(themes, HttpStatus.OK);
    }
}
