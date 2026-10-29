package com.veyora.backend.resource;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "resources")
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;

    @Column(length = 2000)
    private String description;

    private String location;
    private String ownerName;
    private String ownerEmail;
    private BigDecimal pricePerHour;
    private boolean available = true;

    public Resource() {
    }

    public Resource(
            String title,
            String category,
            String description,
            String location,
            String ownerName,
            String ownerEmail,
            BigDecimal pricePerHour
    ) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.location = location;
        this.ownerName = ownerName;
        this.ownerEmail = ownerEmail;
        this.pricePerHour = pricePerHour;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCategory() {
        return category;
    }

    public String getDescription() {
        return description;
    }

    public String getLocation() {
        return location;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public BigDecimal getPricePerHour() {
        return pricePerHour;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    public void setPricePerHour(BigDecimal pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}
