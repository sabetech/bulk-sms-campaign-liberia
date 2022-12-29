import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Root from './routes/root';
import Home from './pages/main/Home';
import Login from './pages/auth/Login';
import Contacts from './pages/main/Contacts';
import SendMessage from './pages/main/SendMessage';
import SentMesssages from './pages/main/SentMessages';
import Content from './pages/main/Content';
import Groups from './pages/main/Groups';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Home />
      },
      {
        path: "/send-message",
        element: <SendMessage />
      },
      {
        path: "/messages/sent",
        element: <SentMesssages />
      },
      {
        path:"/contacts",
        element: <Contacts />
      },
      {
        path:"/messages",
        element: <Content />
      },
      {
        path:"/groups",
        element: <Groups />
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
