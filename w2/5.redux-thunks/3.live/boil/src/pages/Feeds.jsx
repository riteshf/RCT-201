import React, { useEffect, useState } from "react";
import axios from "axios";

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/feeds").then((d) => {
      setFeeds(d.data);
    });
  }, []);
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
