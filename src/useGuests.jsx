import { useState, useEffect } from "react";

// Placeholder data
const placeholderGuests = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "555-1234",
    job: "Software Engineer",
    bio: "Loves hiking and outdoor adventures.",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "555-5678",
    job: "Product Manager",
    bio: "Enjoys painting and jazz music.",
  },
  {
    id: 3,
    name: "Carol Lee",
    email: "carol@example.com",
    phone: "555-8765",
    job: "UX Designer",
    bio: "Passionate about user-centered design.",
  },
];

export default function useGuests() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // Simulate fetching guest list - replace with real API call later
    setTimeout(() => {
      setGuests(placeholderGuests);
    }, 500);
  }, []);

  return { guests };
}
