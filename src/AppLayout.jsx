import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowTicket from "./components/ShowTicket";
import EnterTicket from "./components/EnterTicket";
import Loader from "./components/Loader";

const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function AppLayout() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchTickets() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/tickets`);
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="flex flex-col h-100 justify-between bg-slate-800">
      <Header></Header>
      <div className="px-3 sm:grid grid-cols-2">
        <div className="sticky">
          <EnterTicket fetchTickets={fetchTickets}></EnterTicket>
        </div>
        {loading ? (
          <Loader></Loader>
        ) : (
          <ShowTicket
            tickets={tickets}
            fetchTickets={fetchTickets}
          ></ShowTicket>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
