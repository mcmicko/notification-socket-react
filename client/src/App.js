import { useState } from "react";
import "./App.css";
import { posts } from "./data";

import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log(user);
  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}

          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={(e) => setUser(username)}>login</button>
        </div>
      )}
    </div>
  );
};

export default App;
