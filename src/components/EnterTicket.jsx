import { useState } from "react";

const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function EnterTicket({ fetchTickets }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const handleInput = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/tickets`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          dateCreated: date,
          notes: notes,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseJson = await response.json();
      if (responseJson) {
        setName("");
        setEmail("");
        setNotes("");
        setDate("");
        fetchTickets();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <h3>Enter information here:</h3>
      <form onSubmit={handleInput}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border mb-5 mt-5"
            required
            autoComplete="true"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border"
            required
            autoComplete="true"
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            rows={4}
            cols={30}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="border mt-5"
          ></textarea>
          <div>
            <button
              className="border rounded-md m-2 p-1 hover:bg-slate-200"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
