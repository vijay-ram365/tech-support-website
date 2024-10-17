import { useState } from "react";
import Loader from "../components/Loader";
import EditTicketModal from "../components/EditTicketModal";

//base url to be changed
//const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function ShowTicket({ tickets, loading }) {
  const [editModal, setEditModal] = useState(false);
  //const [editTickets, setEditTickets] = useState({});

  // const deleteUser = async function (id) {
  //   // this functions deletes the tickets and should be renamed and moved for organizational reasons.
  //   try {
  //     const response = await fetch(`${BASE_URL}/tickets/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (!response) return;
  //     tickets.filter((ticket) => ticket.id !== id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const editUser = async function (id) {
  //   try {
  //     const response = await fetch(`${BASE_URL}/tickets/${id}`, {
  //       method: "PUT",
  //     });
  //     if (!response) return;
  //     const editedTicket = tickets.filter((ticket) => ticket.id !== id);
  //     console.log(editedTicket);
  //     setEditModal(!editModal);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  console.log(tickets);

  return (
    <div className="p-5 text-slate-500 overflow-y-auto h-dvh">
      {!loading ? (
        <h3 className="mb-5 text-center border-b">
          {tickets.length === 0 ? "No Tickets" : `Tickets: ${tickets.length}`}
        </h3>
      ) : (
        <Loader></Loader>
      )}
      {editModal && <EditTicketModal></EditTicketModal>}
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} className="border-b-2 border-r-8 p-2 my-3">
            <div className="flex justify-between items-center m-3">
              <p>
                {ticket.name}
                <span
                  className={`${
                    ticket.os
                      ? "bg-green-500 ml-3 p-1 rounded text-xs text-slate-600"
                      : ""
                  }`}
                >
                  {ticket.os}
                </span>
              </p>
              <p className="text-xs">{ticket.email}</p>
              <small className="text-xs">{ticket.created_at}</small>
            </div>
            <p className="mb-4 mt-4 p-3">{ticket.description}</p>

            <button
              className="bg-red-400 px-2 py-1 ml-3 rounded text-slate-300 dark:hover:bg-red-500"
              onClick={() => deleteUser(ticket.id)}
            >
              delete
            </button>
            <button
              className="bg-yellow-500 px-2 py-1 m-3 text-slate-500 rounded dark:hover:bg-yellow-400"
              onClick={() => editUser(ticket.id)}
            >
              edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
