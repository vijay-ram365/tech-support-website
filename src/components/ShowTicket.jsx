const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function ShowTicket({ tickets, fetchTickets }) {
  const deleteUser = async function (id) {
    try {
      const response = await fetch(`${BASE_URL}/tickets/${id}`, {
        method: "DELETE",
      });
      if (!response) return;
      tickets.filter((ticket) => ticket.id !== id);
      fetchTickets();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border p-5">
      <h3 className="mb-5">
        {tickets.length === 0 ? "No Tickets" : `Tickets: ${tickets.length}`}
      </h3>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} className="border-b-4 border p-1 my-3">
            <div className="flex justify-between mb-3">
              <p>{ticket.name}</p>
              <p>{ticket.email}</p>
              <small>{ticket.dateCreated}</small>
            </div>
            <p className="mb-2">{ticket.notes}</p>

            <button
              className="bg-red-300 p-1"
              onClick={() => deleteUser(ticket.id)}
            >
              delete
            </button>
            <button className="bg-yellow-300 p-1 ml-2">edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
