const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function ShowTicket({ tickets }) {
  const deleteUser = async function (id) {
    try {
      const response = await fetch(`${BASE_URL}/tickets/${id}`, {
        method: "DELETE",
      });
      if (!response) return;
      tickets.filter((ticket) => ticket.id !== id);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };
  return (
    <div className="border p-5">
      <h3 className="mb-5">Tickets:</h3>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index} className="border-b-4 border p-1 my-3">
            <div className="flex justify-between mb-3">
              <p>{ticket.name}</p>
              <p>{ticket.email}</p>
              <small>{ticket.dateCreated}</small>
            </div>
            <p>{ticket.notes}</p>

            <button
              className="bg-red-300 p-1"
              onClick={() => deleteUser(ticket.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
