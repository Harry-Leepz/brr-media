import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold text-blue-600" : "text-gray-800";

  return (
    <nav className='bg-white shadow p-4 flex gap-4'>
      <NavLink to='/' className={linkStyle}>
        Dashboard
      </NavLink>
      <NavLink to='/staff' className={linkStyle}>
        Staff Directory
      </NavLink>
      <NavLink to='/it-request' className={linkStyle}>
        IT Request
      </NavLink>
      <NavLink to='/tickets' className={linkStyle}>
        Tickets
      </NavLink>
      <NavLink to='/todo' className={linkStyle}>
        To-Do List
      </NavLink>
    </nav>
  );
}
