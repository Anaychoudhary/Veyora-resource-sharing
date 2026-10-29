package com.veyora.backend.resource;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ResourceRepository
        extends JpaRepository<Resource, Long> {

    List<Resource> findByAvailableTrue();

    List<Resource> findByOwnerEmailIgnoreCase(String ownerEmail);
}