import { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/chat")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setChats(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Chat Page</h1>
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>{chat.chatName}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
