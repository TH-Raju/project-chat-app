import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ChatPage from "../Pages/ChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/chats",
    element: <ChatPage />,
  },
]);
