import About from "./pages/About"
import Admin from "./pages/admin/Admin"
import Basket from "./pages/basket/Basket"
import Contact from "./pages/Contact"
import DetailsPage from "./pages/details/DetailsPage"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Shop from "./pages/Shop"
import Wines from "./pages/Wines"
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
          path: "/wines",
          element: <Wines />
        },
        {
          path: "/basket",
          element: <Basket />
        },
      ]
    },
    {
      path: "details/:id",
      element: <DetailsPage />
    },
    {
      path: "/admin",
      element: <Admin />
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
