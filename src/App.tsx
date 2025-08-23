import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "@/components/LocalHost";
import CapsulaLandingPage from "@/pages/Tc/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { useEffect } from "react";
import { pageview } from "./lib/ga";
function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    // Update document title
    if (path.startsWith("/fora")) {
      document.title = "Forá: The Time Capsule";
    } else {
      document.title = "localhost";
    }

    // Send GA pageview
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <TitleManager />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fora" element={<CapsulaLandingPage />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
