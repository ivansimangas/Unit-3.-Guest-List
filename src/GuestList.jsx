export default function GuestList({ guests, onSelect }) {
  return (
    <table className="guest-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {guests.map((guest) => (
          <tr
            key={guest.id}
            onClick={() => onSelect(guest.id)}
            tabIndex={0}
            style={{ cursor: "pointer" }}
          >
            <td>{guest.name}</td>
            <td>{guest.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
