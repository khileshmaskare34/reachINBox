// src/components/Onebox.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Onebox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/onebox/list");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (threadId) => {
    try {
      await axios.delete(`https://api.example.com/onebox/${threadId}`);
      setData(data.filter((item) => item.id !== threadId));
    } catch (error) {
      console.error("Error deleting thread:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "D") {
      // Handle delete
    } else if (event.key === "R") {
      // Handle reply
    }
  };

  return (
    <>
      <div onKeyDown={handleKeyDown}>
        <h2>Onebox</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => console.log("Reply")}>Reply</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Onebox;
