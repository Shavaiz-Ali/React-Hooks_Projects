// import React from 'react'
import { useEffect, useState } from "react";
import GitHubUsers from './GitHubUsers/GitHubUsers'
const FetchAPi = () => {

  const [users, setUsers] = useState([]);
  
  const getData = async () => {

    try { 
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());

    } catch(error) {
      const newError = new Error("Unable TO get Data")
      alert(newError)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <GitHubUsers users = {users}/>
    </>
  );
};
export default FetchAPi;
