import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import axios from "axios";
import { useRef } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const initialState = {
    user: null,
    loading: false,
    topics: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "user":
        return {
          ...state,
          user: action.payload.user_name,
          topics: action.payload.topics,
          loading: false,
        };
      case "loading":
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsr = async () => {
    const res = await axios.post("http://localhost:8000/user", {
      token: localStorage.getItem("token"),
    });
    console.log(res.data);
    dispatch({ type: "user", payload: res.data });
  };

  const firstMount = useRef(true);

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      (!state.user || !!state.topic) &&
      firstMount.current
    ) {
      dispatch({ type: "loading", payload: true });
      firstMount.current = false;
      getUsr();
    }
    return () => {};
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
