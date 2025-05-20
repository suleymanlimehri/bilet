
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Menu from './pages/Menu';
import Basket from './pages/basket/Basket';
import Admin from './pages/admin/Admin';
import DetailPage from './pages/details/DetailPage';
import Special from './pages/Special';
import Reserv from './pages/Reserv';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/menu',
          element: <Menu />
        },
        {
          path: '/special',
          element: <Special />
        },
        {
          path: '/reserv',
          element: <Reserv/>
        },
        {
          path: '/basket',
          element: <Basket />
        },
        {
          path: '/admin',
          element: <Admin />
        },
      ]
    },
    {
      path: 'details/:id',
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
