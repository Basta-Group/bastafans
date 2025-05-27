import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar";
import HomePage from "./components/homePage";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="flex flex-row min-h-screen bg-[#191C26]">
        {/* Navbar on the left */}
        <div className="w-1/6 min-w-[80px] bg-[#181B23] flex flex-col items-center py-6">
          <Navbar />
        </div>
        {/* Main content in the center */}
        <main className="flex-grow flex justify-center items-start bg-[#23263A]">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        {/* Footer on the right */}
        <div className="w-1/6 min-w-[80px] bg-[#181B23] flex flex-col items-center py-6">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
