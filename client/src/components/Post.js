import { Avatar, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import Modal from "react-modal";
import { useHistory } from 'react-router-dom';
import Axios from "axios";

function Post() {
  const history = useHistory();
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [posts, setPosts] = useState([]);

  const handleAnswer = (e) => {
    e.preventDefault();

    Axios.post('/api/answer', { answer: answer }).then((res) => {
      if (res.status !== 200) {
        window.alert("Server not responding!");
      } else {
        window.alert("Your Answer has been added");
        setIsModalOpen(false);
        setAnswer("");
        history.push('/');
      }
    }).catch((err) => {
      console.log(err);
      window.alert("Server not responding!");
    })

  };

  useEffect(() => {
    Axios.get('/api/queans').then((result) => {
      setPosts(result.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [answer])

  console.log(posts.length)
  return (
    <>
      {posts.map((post, index) => {
        return (
          <div key={index} className="post">
            <div className="post__info">
              <Avatar
                src="https://img.icons8.com/cotton/2x/user-male.png"
                className="quoraBox__infoAvatar"
              />
              <h4>{post.userEmail}</h4>
              <small>{post.createdAt}</small>
            </div>
            <div className="post__body">
              <div className="post__question">
                <p>{post.question}</p>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="post__btnAnswer"
                >
                  Answer
                </Button>
                <Modal
                  isOpen={IsmodalOpen}
                  onRequestClose={() => setIsModalOpen(false)}
                  shouldCloseOnOverlayClick={false}
                  style={{
                    overlay: {
                      width: 680,
                      height: 550,
                      backgroundColor: "rgba(0,0,0,0.8)",
                      zIndex: "1000",
                      top: "50%",
                      left: "50%",
                      marginTop: "-250px",
                      marginLeft: "-350px",
                    },
                  }}
                >
                  <div className="modal__question">
                    <p>What is Quora?</p>
                    <p>
                      asked by user
                <span className="name">
                        user999@gmail.com
                </span>
                on
                <span className="name">
                        01.12.2020
                </span>
                    </p>
                  </div>
                  <div className="modal__answer">
                    <textarea
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Enter Your Answer"
                      type="text"
                    />
                  </div>
                  <div className="modal__button">
                    <button className="cancle" onClick={() => setIsModalOpen(false)}>
                      Cancel
              </button>
                    <button type="sumbit" onClick={handleAnswer} className="add">
                      Add Answer
              </button>
                  </div>
                </Modal>
              </div>
              <hr />
              <small style={{ textAlign: "left" }}>{post.answers.length} Answers</small>
              <hr />
              <div className="post__answer">
                <ol style={{ position: "relative", paddingBottom: "5px" }}>
                  {post.answers.map((ans, i) => {
                    return (
                      <li key={i} style={{ textAlign: "left", paddingTop: "1rem", paddingBottom: "1rem" }}>
                        {ans.answer}
                        {/* <span
                          style={{
                            position: "absolute",
                            color: "gray",
                            fontSize: "small",
                            display: "flex",
                            right: "0px",
                          }}
                        >
                          <span style={{ color: "#b92b27" }}>
                            {ans.userEmail}
                            on
                            {ans.createdAt}
                          </span>
                        </span> */}
                      </li>
                    )
                  })}
                </ol>
              </div>
              {/* <img src="https://www.talkwalker.com/uploads/2020/measurement/Quora%20pic.png" alt="" /> */}
            </div>
            <div className="post__footer">
              <div className="post__footerAction">
                <ArrowUpwardOutlinedIcon />
                <ArrowDownwardOutlinedIcon />
              </div>

              <RepeatOutlinedIcon />
              <ChatBubbleOutlineOutlinedIcon />
              <div className="post__footerLeft">
                <ShareOutlined />
                <MoreHorizOutlined />
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default Post;
