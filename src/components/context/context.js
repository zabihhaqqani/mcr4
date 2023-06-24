import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { dataReducer } from "../reducer/reducer";
import { forumData } from "../../pages/data";

export const Context = createContext()

function ContextProvider({children}) {

  const initialState = {
    forumData,
  };

    const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

    
    const commentHandler = (comments) => {
      console.log(comments);
    };

    const latestVoteHandler = () => {
      
    }
  return (
    <Context.Provider
      value={{
        dataState,
        dataDispatch,
    
        commentHandler,
        latestVoteHandler
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

export const useDataContext = () => useContext(Context)