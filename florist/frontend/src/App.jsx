import About from "./pages/About"
import Admin from "./pages/admin/Admin"
import Basket from "./pages/basket/Basket"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import DetailPage from "./pages/details/DetailPage"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Pages from "./pages/Pages"
import Services from "./pages/Services"
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
          path: "/pages",
          element: <Pages />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/admin",
          element: <Admin />
        },
        {
          path: "/basket",
          element: <Basket />
        },
      ]
    },
    {
      path: "details/:id",
      element: <DetailPage/>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
