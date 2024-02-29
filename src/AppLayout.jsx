import { useEffect, useState } from "react";
import EnterTicket from "./components/EnterTicket";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowTicket from "./components/ShowTicket";
import Loader from "./components/Loader";

const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function AppLayout() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
    fetchTickets();
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header></Header>
      <div className="px-3 sm:grid grid-cols-2 m-auto gap-6">
        <EnterTicket></EnterTicket>
        {loading ? (
          <Loader></Loader>
        ) : (
          <ShowTicket tickets={tickets}></ShowTicket>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
