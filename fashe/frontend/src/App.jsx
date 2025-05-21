import About from "./pages/About"
import Admin from "./pages/admin/Admin"
import Basket from "./pages/basket/Basket"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import DetailsPage from "./pages/details/DetailsPage"
import Features from "./pages/Features"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Sale from "./pages/Sale"
import Shop from "./pages/Shop"
import {createBrowserRouter,RouterProvider} from "react-router-dom"

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
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/sale",
          element: <Sale />
        },
        {
          path: "/features",
          element: <Features />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/basket",
          element: <Basket />
        },
        {
          path: "/admin",
          element: <Admin />
        },
      ]
    },
  {
      path: "details/:id",
      element: <DetailsPage />
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
