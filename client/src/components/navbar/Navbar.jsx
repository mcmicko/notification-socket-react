import React, { useEffect, useState } from "react";
import "./navbar.css";
import Notification from "../../img/notification.svg";
import Settings from "../../img/settings.svg";
import Messages from "../../img/message.svg";

const Navbar = ({ socket }) => {
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotification((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(notification);
  return (
    <div className="navbar">
      <span className="logo">McMApp</span>
      <div className="icons">
        <div className="icon">
          <img className="iconImg" src={Notification} alt="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img className="iconImg" src={Messages} alt="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img className="iconImg" src={Settings} alt="iconImg" alt="" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
