package com.veyora.backend.booking;

import com.veyora.backend.resource.Resource;
import com.veyora.backend.resource.ResourceRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final ResourceRepository resourceRepository;

    public BookingService(
            BookingRepository bookingRepository,
            ResourceRepository resourceRepository
    ) {
        this.bookingRepository = bookingRepository;
        this.resourceRepository = resourceRepository;
    }

    public Booking createBooking(Booking booking, Long resourceId) {

        Resource resource = resourceRepository.findById(resourceId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Resource not found"
                ));

        if (!resource.isAvailable()) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Resource is unavailable"
            );
        }

        if (booking.getStartAt() == null
                || booking.getEndAt() == null
                || !booking.getEndAt().isAfter(booking.getStartAt())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Invalid booking time"
            );
        }

        booking.setResource(resource);
        booking.setStatus(BookingStatus.PENDING);

        return bookingRepository.save(booking);
    }

    public List<Booking> getStudentBookings(String email) {
        return bookingRepository.findByStudentEmailIgnoreCase(email);
    }

    public List<Booking> getOwnerBookings(String email) {
        return bookingRepository.findByResourceOwnerEmailIgnoreCase(email);
    }

    public Booking updateBookingStatus(
            Long bookingId,
            BookingStatus status
    ) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Booking not found"
                ));

        if (booking.getStatus() != BookingStatus.PENDING) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Only pending bookings can be updated"
            );
        }

        booking.setStatus(status);
        return bookingRepository.save(booking);
    }
}