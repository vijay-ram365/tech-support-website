import EnterTicket from "./components/EnterTicket";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShowTicket from "./components/ShowTicket";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header></Header>
      <div className="grid grid-cols-2 m-auto gap-6 px-3">
        <EnterTicket></EnterTicket>
        <ShowTicket></ShowTicket>
      </div>
      <Footer></Footer>
    </div>
  );
}
