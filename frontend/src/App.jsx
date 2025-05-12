import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Offer from "./pages/Offer"

import Helmet from "./pages/Helmet"
import Basket from "./pages/basket/Basket"
import Admin from "./pages/Admin"
import Menu from "./pages/Menu"
import News from "./components/news/News"
import Galary from "./components/galary/Galary"
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
          path: "/galary",
          element: <Galary />
        },
        {
          path: "/news",
          element: <News />
        },
        {
          path: "/",
          element: <Offer />
        },
        {
          path: "/menu",
          element: <Menu />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/about",
          element: <About />
        },

      ]
    },
    {
      path: "/basket",
      element: <Basket />
    },
    {
      path: "/admin",
      element: <Admin />
    },
    {
      path: "*",
      element: <Helmet />
    },
    {
      path: "detailspage/:id",
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
