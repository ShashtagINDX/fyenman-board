import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route index element={<div></div>} />
      <Route path='register' element={<Auth type='register' />} />
      <Route path='login' element={<Auth type='login' />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
