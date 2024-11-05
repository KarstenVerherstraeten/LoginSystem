import React from "react";
import LogoutButton from "../components/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
    return (
        <>
         <h1>Dashboard</h1>
         <LogoutButton />
        </>
       
   
    );
    }

export default Dashboard;