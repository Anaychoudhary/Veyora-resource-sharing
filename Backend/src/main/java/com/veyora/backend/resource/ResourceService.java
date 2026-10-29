package com.veyora.backend.resource;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ResourceService {

    private final ResourceRepository repository;

    public ResourceService(ResourceRepository repository) {
        this.repository = repository;
    }

    public List<Resource> getAvailableResources() {
        return repository.findByAvailableTrue();
    }

    public List<Resource> getOwnerResources(String ownerEmail) {
        return repository.findByOwnerEmailIgnoreCase(ownerEmail);
    }

    public Resource getResourceById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Resource not found"
                ));
    }

    public Resource createResource(Resource resource) {
        return repository.save(resource);
    }
}