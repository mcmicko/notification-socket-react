import React, { useEffect, useState } from "react";
import "./navbar.css";
import Notification from "../../img/notification.svg";
import Settings from "../../img/settings.svg";
import Messages from "../../img/message.svg";

const Navbar = ({ socket }) => {
  const [notification, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName, type }) => {
    let action;
    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span className="notification">{`${senderName} ${action} your post`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  console.log(notification);
  return (
    <div className="navbar">
      <span className="logo">McMApp</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img className="iconImg" src={Notification} alt="iconImg" />
          {notification.length > 0 && (
            <div className="counter">{notification.length}</div>
          )}
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img className="iconImg" src={Messages} alt="iconImg2" />
          <div className="counter">{notification.length}</div>
        </div>
        <div className="icon" onClick={() => setOpen(!open)}>
          <img className="iconImg" src={Settings} alt="iconImg3" />
          <div className="counter">{notification.length}</div>
        </div>
        {open && (
          <div className="notifications">
            {notification.map((n) => displayNotification(n))}
            <button className="nButton" onClick={handleRead}>
              mark as read
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
