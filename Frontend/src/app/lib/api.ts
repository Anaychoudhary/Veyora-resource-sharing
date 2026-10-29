const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export async function getResources() {
  const response = await fetch(`${API_URL}/api/resources`);

  if (!response.ok) {
    throw new Error("Unable to load resources");
  }

  return response.json();
}

export async function getResourceById(id: string) {
  const response = await fetch(`${API_URL}/api/resources/${id}`);

  if (!response.ok) {
    throw new Error("Unable to load resource details");
  }

  return response.json();
}

export async function createResource(data: {
  title: string;
  category: string;
  description: string;
  location: string;
  ownerName: string;
  ownerEmail: string;
  pricePerHour: number;
}) {
  const response = await fetch(`${API_URL}/api/resources`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Unable to create resource");
  }

  return response.json();
}

export async function createBooking(
  resourceId: string,
  data: {
    studentName: string;
    studentEmail: string;
    startAt: string;
    endAt: string;
  }
) {
  const response = await fetch(
    `${API_URL}/api/bookings/${resourceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Unable to create booking");
  }

  return response.json();
}

export async function getStudentBookings(email: string) {
  const response = await fetch(
    `${API_URL}/api/bookings/student?email=${encodeURIComponent(email)}`
  );

  if (!response.ok) {
    throw new Error("Unable to load student bookings");
  }

  return response.json();
}

export async function getOwnerBookings(email: string) {
  const response = await fetch(
    `${API_URL}/api/bookings/owner?email=${encodeURIComponent(email)}`
  );

  if (!response.ok) {
    throw new Error("Unable to load owner bookings");
  }

  return response.json();
}

export async function updateBookingStatus(
  bookingId: number,
  status: "APPROVED" | "REJECTED"
) {
  const response = await fetch(
    `${API_URL}/api/bookings/${bookingId}/status?status=${status}`,
    {
      method: "PATCH",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to update booking status");
  }

  return response.json();
}