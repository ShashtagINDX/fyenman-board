import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import AddTopic from "./Pages/AddTopic";
import Loading from "./components/common/Loading";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    console.log("sss")
    if (Math.random() < 0.1) {
      throw new Error("you found a secret error")
    }

    return () => {
    }
  }, [])

  return (
    <div >
      <Routes>
        <Route index element={<div></div>} />
        <Route path='register' element={<Auth type='register' />} />
        <Route path='login' element={<Auth type='login' />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='add-topic' element={<AddTopic />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Loading /> */}
    </div>
  );
}

export default App;
