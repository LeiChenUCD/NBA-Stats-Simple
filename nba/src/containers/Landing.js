import React from "react";
import Standings from "./Standings.js";
import NavBar from "../components/NavBar";

function Landing() {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         let jsonData =  await GetPlayerById(237)
    //         console.log("From App.js: ")
    //         console.log(jsonData)
    //         console.log("Accessing .first_name variable in data fetched from API: ")
    //         console.log(jsonData.first_name)
    //     };
    
    //     fetchData();
    // }, []);
    
    return (
        <>
        <NavBar/>
        <Standings/>
        </>
    )
}

export default Landing