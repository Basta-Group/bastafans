import { createBrowserRouter, Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import HomePage from "./components/homePage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer";

// Define your routes using `createBrowserRouter`
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-row min-h-screen bg-[#1f2233]">
        {/* Navbar on the left - hidden on mobile */}
        <div className="hidden lg:block w-1/4 min-w-[380px] lg:px-10">
          <div className=" bg-[#16192A] flex flex-col items-center py-6 h-full">
            <NavBar />
          </div>
        </div>
        {/* Main content in the center */}
        <main className="w-full   mx-auto">
          <ScrollToTop />
          <Outlet />
        </main>
        {/* Footer on the right - hidden on mobile */}
        <div className="hidden lg:block w-1/4 min-w-[380px] lg:px-10 ">
          <Footer />
        </div>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
