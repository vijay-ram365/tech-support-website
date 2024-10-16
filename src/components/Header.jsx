import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-center  py-9 bg-slate-900 text-slate-400">
      <h1 className="text-4xl">IT Support Tickets</h1>
      <small>This is an ongoing project</small>
      <nav>
        <div className="text-center">
          <button className="p-1 mr-4 mt-4  hover:bg-slate-800 rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-2" : ""
              }
              to="/"
            >
              Enter Ticket
            </NavLink>
          </button>
          <button className="p-1 hover:bg-slate-800 rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-2" : ""
              }
              to="/showtickets"
            >
              Show Tickets
            </NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
}
