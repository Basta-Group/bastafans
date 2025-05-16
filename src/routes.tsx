import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/homePage/homePage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer";
import LegalPage from "./pages/homePage/legalPage";
import ServicePage from "./pages/homePage/servicePage";
import AboutUs from "./pages/homePage/aboutUs/AboutUs";

// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <NavBar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/legal",
        element: <LegalPage />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
