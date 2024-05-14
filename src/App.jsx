import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowTicket from "./pages/ShowTicket";
import EnterTicket from "./pages/EnterTicket";
import PageNotFound from "./pages/PageNotFound";

//base url to be changed
//const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchTickets() {
    // this function gets the tickets from the api and may be moved for organization reasons.
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
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route
            path="/"
            element={<EnterTicket fetchTickets={fetchTickets}></EnterTicket>}
          ></Route>
          <Route
            path="showtickets"
            element={
              <ShowTicket
                tickets={tickets}
                fetchTickets={fetchTickets}
                loading={loading}
              ></ShowTicket>
            }
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

//   return (
//     <div>
//       <Header></Header>
//       <EnterTicket fetchTickets={fetchTickets}></EnterTicket>
//       {loading ? (
//         <Loader></Loader>
//       ) : (
//         <ShowTicket tickets={tickets} fetchTickets={fetchTickets}></ShowTicket>
//       )}
//       <Footer></Footer>
//     </div>
//   );
// }
