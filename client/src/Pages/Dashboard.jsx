import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Topic from "../components/Topic";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { state } = useContext(AppContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    return () => { };
  }, []);

  return (
    <div className='grid place-items-center min-h-[100vh] max-h-[100vh] p-32 bg-black'>
      <div className='max-w-4xl  w-full rounded shadow-lg px-6  py-4 bg-white'>
        <div className='text-3xl capitalize'>{state.user}'s board</div>
        <div className='w-full text-center cursor-pointer inline-block mt-6 text-xl bg-[#56A3A6] text-white py-2 rounded mb-10'>
          <Link
            to='/add-topic'
          >
            Add Topic
          </Link></div>

        {state?.topics?.map((topic) => (
          <Topic
            key={topic._id}
            topic={topic.topic}
            tokens={topic.tokens}
            understandingPercent={topic.understandingPercent}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
