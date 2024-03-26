package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Theme;

@Repository
public interface ThemeRepository extends JpaRepository<Theme, Long> {
    List<Theme> findByProductProductId(Long productId);
}
