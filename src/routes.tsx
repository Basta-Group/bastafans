import { createBrowserRouter, Outlet } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './components/homePage';



// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <NavBar />
      <Outlet />
      <Footer />
    </>),
    children: [
      {
        path: "/",
        element: (<>
          <Home />
        </>),
      },
    ]
  },
  
]);
