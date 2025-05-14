import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Discover from "./pages/Discover"
import Donate from "./pages/Donate"
import Blog from "./pages/Blog"
import Admin from "./pages/admin/Admin"
import Basket from "./pages/basket/Basket"
import Helmet from "./pages/Helmet"
import { createBrowserRouter, RouterProvider } from "react-router"
import DetailsPage from "./pages/details/DetailsPage"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/discover",
          element: <Discover />
        },
        {
          path: "/donate",
          element: <Donate />
        },

      ]
    },
    {
      path: "/admin",
      element: <Admin />
    },
    {
      path: "/basket",
      element: <Basket />
    },
    {
      path: "*",
      element: <Helmet />
    },
    {
      path: "details/:id",
      element: <DetailsPage />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
