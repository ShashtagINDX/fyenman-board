import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ type }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  let location = useLocation();

  const { dispatch } = useContext(AppContext);

  const handleClick = async () => {
    dispatch({ type: "loading", payload: true });
    if (userName === "" || password === "") {
      setError("* All fields are required");
      return;
    }
    try {
      const res = await axios.post(`http://localhost:8000/${type}`, {
        user_name: userName,
        password: password,
      });
      dispatch({ type: "user", payload: res.data });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard", { replace: true });
    } catch (e) {
      dispatch({ type: "loading", payload: false });
      setError(e.response.data);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }

    return () => {};
  }, []);

  useEffect(() => {
    setError(null);
    return () => {};
  }, [location]);

  return (
    <div className='grid place-items-center h-[100vh] bg-black'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 bg-white'>
        <div className='text-3xl mb-6 capitalize'>{type}</div>
        {error && <div className=' text-[#DF2935]  mb-2'>{error}</div>}
        <label className='text-xl'>
          Username
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            type='text'
            className='w-full rounded my-1 mb-3'
          />
        </label>
        <label className='text-xl'>
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
            className='w-full rounded my-1 mb-3'
          />
        </label>
        <div className=' mb-3 '>
          {type === "register"
            ? "Already have an account? "
            : "Don't have an account? "}

          <Link
            to={type === "register" ? "/login" : "/register"}
            className='text-[#3772ff] cursor-pointer'>
            {type === "register" ? "Login." : "Register."}
          </Link>
        </div>
        <button
          onClick={handleClick}
          className='bg-black text-white px-6 py-2 rounded'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
