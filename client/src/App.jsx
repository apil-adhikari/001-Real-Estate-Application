import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, RequireAuth } from "./routes/layout/Layout";
// import Navbar from "./components/navbar/Navbar";
// import "./layout.scss"; // Move to routes/layout folder
import HomePage from "./routes/homePage/HomePage";
import ListPage from "./routes/listPage/ListPage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profile/ProfilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";

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

        // Login
        {
          path: "/login",
          element: <Login />,
        },

        // Register
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          // PROFILE ROUTE
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          // Update Profile
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
