import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/HomePage/Home";
// import Video from "./pages/VideoPage/Video";
import { lazy } from "react";

const Video = lazy(() => import("./pages/VideoPage/Video"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shorts",
        element: <Home />,
      },
      {
        path: "/music",
        element: <Home />,
      },
      {
        path: "/news",
        element: <Home />,
      },
      {
        path: "/subscriptions",
        element: <Home />,
      },
      {
        path: "/your videos",
        element: <Home />,
      },
      {
        path: "/downloads",
        element: <Home />,
      },
      {
        path: "/your channel",
        element: <Home />,
      },
      {
        path: "/history",
        element: <Home />,
      },
      {
        path: "/playlists",
        element: <Home />,
      },
      {
        path: "/all",
        element: <Home />,
      },
      {
        path: "/sports",
        element: <Home />,
      },
      {
        path: "/gaming",
        element: <Home />,
      },
      {
        path: "/technology",
        element: <Home />,
      },
      {
        path: "/comedy",
        element: <Home />,
      },
      {
        path: "/entertainment",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Home />,
      },
      {
        path: "/watch/:videoId",
        element: <Video />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
