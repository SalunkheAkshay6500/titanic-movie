//context ==> (WareHouse data)
//Provider ==> (Delivery boy)
//consumer/ useContext ==>(User)



import React, { useContext, useEffect, useState } from "react";


 export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [movie, setMovie] = useState([]);
    const [IsLoading, setIsloading] = useState(true);
    const [IsError, setIsError] = useState({ show: "false", msg: "" });
    const [query , setQuery]= useState("titanic");

    const getAllMovies = async (url) => {
        setIsloading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if (data.Response === "True") {
                setIsloading(false);
                setMovie(data.Search);

                setIsError({
                    show: false,
                    msg: ""
                });
            }
            else {
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        //setMovie([]);
       let timerOut= setTimeout(() => {
            getAllMovies(`${API_URL}&s=${query}`); 
        }, 500);
            
            return ()=> clearTimeout(timerOut);

        }, [query])
       

    return <AppContext.Provider value={{ movie, IsLoading, IsError, query , setQuery }}>{children}</AppContext.Provider>

};

const useGlobalContext = () => {

    return useContext(AppContext);
};


export { AppContext, AppProvider, useGlobalContext };