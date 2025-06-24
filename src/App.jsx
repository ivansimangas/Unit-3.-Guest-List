import { useState } from "react";
import GuestList from "./GuestList.jsx";
import GuestDetails from "./GuestDetails.jsx";
import useGuests from "./useGuests.jsx";

export default function App() {
  const { guests } = useGuests(); // Custom hook for data (starts with placeholder)
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  const selectedGuest = guests.find((g) => g.id === selectedGuestId);

  return (
    <div className="app">
      <h1>Guest List</h1>
      {!selectedGuest && (
        <GuestList guests={guests} onSelect={setSelectedGuestId} />
      )}
      {selectedGuest && (
        <GuestDetails
          guest={selectedGuest}
          onBack={() => setSelectedGuestId(null)}
        />
      )}
    </div>
  );
}
