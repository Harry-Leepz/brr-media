import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import StaffDirectory from "./pages/StaffDirectory";
import ITRequest from "./pages/ITRequest";
import Tickets from "./pages/Tickets";
import TodoList from "./pages/TodoList";

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/staff' element={<StaffDirectory />} />
    <Route path='/it-request' element={<ITRequest />} />
    <Route path='/tickets' element={<Tickets />} />
    <Route path='/todo' element={<TodoList />} />
  </Routes>
);

export default AppRoutes;
