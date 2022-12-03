import { useReducer } from "react";
import { createContext } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const initialState = {
    user: null,
    loading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "user":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
