import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowTicket from "./pages/ShowTicket";
import EnterTicket from "./pages/EnterTicket";
import PageNotFound from "./pages/PageNotFound";
import { getTickets } from "./apiServices/apiTickets";

//base url to be changed
//const BASE_URL = "https://tech-support-website-api.onrender.com";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    getTickets().then((data) => setTickets(data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<EnterTicket></EnterTicket>}></Route>
          <Route
            path="showtickets"
            element={
              <ShowTicket tickets={tickets} loading={loading}></ShowTicket>
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
