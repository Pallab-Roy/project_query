import React, { useEffect, useState } from "react";
import QHeader from "./QHeader";
import QHeaderPop from "./QHeaderPop";
import Sidebar from './Sidebar';
import Widget from './Widget';
import Feed from './Feed';
import "./Quora.css";
import { useHistory } from 'react-router-dom';


function Quora() {
  const history = useHistory();
  const [userData, setuserData] = useState(null);
  const checkUserLogin = async () => {
    try {
      const response = await fetch('/home', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await response.json();
      setuserData(data);
      if (!response.status === 200) {
        window.alert("Server not responding!");
        history.push('/login');
      } else if (response.status === 425) {
        // window.alert("Unauthrised! Please login first.");
        history.push('/');
      }
    } catch (error) {
      console.log(error);
      history.push('/login');
    }

  }

  useEffect(() => {
    checkUserLogin();
    // eslint-disable-next-line
  }, []);
  return (
    <form method="GET" className="quora">
      <QHeader />
      <QHeaderPop />
      <div className="quora__content">
        <Sidebar />
        <Feed user={userData} />
        <Widget />
      </div>
    </form>
  );
}

export default Quora;
