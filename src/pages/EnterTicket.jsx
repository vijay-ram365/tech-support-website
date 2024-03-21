import { useState } from "react";

const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function EnterTicket({ fetchTickets }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");

  const handleInput = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/tickets`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          dateCreated: new Date().toLocaleString(),
          operatingSystem: operatingSystem,
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

        fetchTickets();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // check options selections for initial page loading so a default selection is made
  // indicate to the user that an option must be selected
  return (
    <div className="p-5 border-l-4 border-b-2 h-dvh">
      <h3 className="text-center text-slate-400 mb-2">
        Enter ticket information
      </h3>
      <form onSubmit={handleInput} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2  font-medium text-cyan-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
            bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded py-1 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-700"
            required
            autoComplete="true"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-cyan-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
            bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded py-1 px-2 mb-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500"
            required
            autoComplete="true"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="operatingSystem" className="text-cyan-700">
            Select OS:
          </label>
          <select
            name="operatingSystem"
            id="operatingSystem"
            value={operatingSystem}
            onChange={(e) => setOperatingSystem(e.target.value)}
            className="ml-3 rounded"
          >
            <option value="">Select one...</option>
            <option value="windows">Windows</option>
            <option value="macos">MacOS</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="notes" className="mb-5 text-cyan-700">
            Notes:
          </label>
          <textarea
            id="notes"
            rows={4}
            cols={30}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="block mb-2 mt-2 w-full text-sm font-medium rounded bg-gray-200"
          ></textarea>
          <div>
            <button
              className="ext-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
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
