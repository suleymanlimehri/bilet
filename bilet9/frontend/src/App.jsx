import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Admin from "./pages/admin/Admin"
import Basket from "./pages/basket/Basket"
import NewArrivals from "./pages/NewArrivals"
import Shop from "./pages/Shop"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Catalog from "./pages/Catalog"
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
          path: "/catalog",
          element: <Catalog />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/arrivals",
          element: <NewArrivals />
        },
        {
          path: "/basket",
          element: <Basket />
        },
      ]
    },
    {
      path: "/admin",
      element: <Admin />
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
