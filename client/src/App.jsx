import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./routes/layout/Layout";
// import Navbar from "./components/navbar/Navbar";
// import "./layout.scss"; // Move to routes/layout folder
import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profile/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        // HOME PAGE
        {
          path: "/",
          element: <HomePage />,
        },

        // LIST PAGE
        {
          path: "/list",
          element: <ListPage />,
        },

        // DISPLAYING SINGLE PAGE (WITH id parameter)
        {
          path: "/:id",
          element: <SinglePage />,
        },

        // PROFILE ROUTE
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
