import React, { useEffect, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Modal from "react-modal";
import "./QHeader.css";
import Logo from './static/logo.png'
import { Avatar, Button, Input } from "@material-ui/core";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ExpandMore, Link } from "@material-ui/icons";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './darkMode/theme';
import { GlobalStyles } from './darkMode/Global';
import { NavLink, useHistory } from 'react-router-dom';
import Axios from "axios";

Modal.setAppElement("#root");

function QHeader() {
  const history = useHistory();
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light' && isDarkMode === false) {
      setTheme('dark');
      setIsDarkMode(true);
    } else {
      setTheme('light');
      setIsDarkMode(false)
    }
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleLogout = () => {
    let isLogout = window.confirm("sure to logout?");
    if (!isLogout) {
      history.push("/");
    } else {
      history.push("/logout");
    }
  }

  const handleQuestion = (e) => {
    e.preventDefault();

    Axios.post('/api/question', { question: input }).then((res) => {
      if (res.status !== 200) {
        window.alert("Server not responding!");
      } else {
        window.alert("Your Question has been added");
        setIsModalOpen(false);
        history.push('/');
        setInput("");
        setInputUrl("");
      }
    }).catch((err) => {
      console.log(err);
    })
  };

  const navStyle = {
    visibility: "hidden",
    boxShadow: "0px 5px 8px -9px rgba(0, 0, 0, 0.5)"
  };
  const navStyle1 = {
    visibility: "visible"
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="qHeader" style={scrollPosition > 50 ? navStyle : navStyle1}>
        <div className="qHeader__logo">
          <img
            src={Logo}
            alt=""
          />
        </div>
        <div className="qHeader__icons">
          <div className="active qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <SearchIcon />
          <input type="text" placeholder="Search Quora" />
        </div>
        <div className="qHeader__Rem qHeader__icons">
          <div className="qHeader__avatar">
            <NavLink to="/login">
              <Avatar
                className="Avatar"
                src="https://img.icons8.com/cotton/2x/user-male.png"
              />
            </NavLink>
          </div>
          <div onClick={handleLogout} className="qHeader__icon">
            <ExitToAppIcon />
          </div>
          <div className="qHeader__icon">
            <Brightness4Icon className="darkModeButton" onClick={toggleTheme} />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 700,
                height: 600,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-300px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar
                className="Avatar"
                src="https://img.icons8.com/cotton/2x/user-male.png"
              />
              <p>user999@gmail.com asked</p>
              <div className="modal__scope">
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div className="modal__fieldLink">
                <Link />
                <input
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  type="text"
                  placeholder="Optional: inclue a link that gives context"
                ></input>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleQuestion} className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default QHeader;
