
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import DetailPage from './pages/details/DetailPage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallary from './pages/Gallary';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Admin from './pages/admin/Admin';
import Basket from './pages/basket/Basket';

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
          path: "/gallary",
          element: <Gallary />
        },
        {
          path: "/menu",
          element: <Menu />
        },
        {
          path: "/reserv",
          element: <Reservation />
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
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/blog",
          element: <Blog />
        },
      ]
    },
    {
      path: "details/:id",
      element: <DetailPage />
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
