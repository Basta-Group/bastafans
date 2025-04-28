import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/homePage";
import GamesPage from "./pages/GamesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import ScrollToTop from "./components/ScrollToTop";

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
        path: "/games",
        element: <GamesPage />,
      },
      {
        path: "/games/:slug",
        element: <GameDetailsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
