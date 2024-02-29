export default function ShowTicket({ tickets }) {
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
            {<small>OS: {ticket.os}</small>}
            {<small className="bg-green-300"> tag area {ticket.tags}</small>}
            <p>{ticket.notes}</p>
            <button className="bg-yellow-300 p-1 mr-2">edit</button>
            <button className="bg-red-300 p-1">delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
