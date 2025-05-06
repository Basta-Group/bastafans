import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/homePage";
import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/footer";

// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <Outlet />
        {/* <Footer /> */}
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
