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
    <div className="p-5 text-slate-300 h-dvh overflow-y-auto">
      <h3 className="mb-5 text-center border-b">
        {tickets.length === 0 ? "No Tickets" : `Tickets: ${tickets.length}`}
      </h3>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} className="border-b-2 border-r-8 p-2 my-3">
            <div className="flex justify-between m-3">
              <p>{ticket.name}</p>
              <p>{ticket.email}</p>
              <small>{ticket.dateCreated}</small>
            </div>
            <p className="mb-4 mt-4 p-3">{ticket.notes}</p>

            <button
              className="bg-red-400 px-2 py-1 ml-3 rounded"
              onClick={() => deleteUser(ticket.id)}
            >
              delete
            </button>
            <button className="bg-yellow-500 px-2 py-1 m-3 text-slate-500 rounded">
              edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
