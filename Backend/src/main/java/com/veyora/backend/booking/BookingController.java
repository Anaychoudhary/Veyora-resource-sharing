package com.veyora.backend.booking;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService service;

    public BookingController(BookingService service) {
        this.service = service;
    }

    // Student creates a booking request
    @PostMapping("/{resourceId}")
    public Booking createBooking(
            @PathVariable Long resourceId,
            @RequestBody Booking booking
    ) {
        return service.createBooking(booking, resourceId);
    }

    // Student dashboard: get their bookings
    @GetMapping("/student")
    public List<Booking> getStudentBookings(
            @RequestParam String email
    ) {
        return service.getStudentBookings(email);
    }

    // Owner dashboard: get incoming bookings
    @GetMapping("/owner")
    public List<Booking> getOwnerBookings(
            @RequestParam String email
    ) {
        return service.getOwnerBookings(email);
    }

    // Owner approves or rejects a booking
    @PatchMapping("/{bookingId}/status")
    public Booking updateStatus(
            @PathVariable Long bookingId,
            @RequestParam BookingStatus status
    ) {
        return service.updateBookingStatus(bookingId, status);
    }
}