import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Team from "./pages/Team";
import ServiceDetail from "./pages/ServiceDetail";
import WebDevelopment from "./pages/webDevelopment";
import AppDevelopment from "./pages/appDevelopment";
import LeadGeneration from "./pages/leadgeneration";
import SocialMediaManagement from "./pages/socialmediamanagement";
import Seo from "./pages/seo";
import Branding from "./pages/branding";
import BlogDetail from "./pages/BlogDetail";

/* --------------------------------
   Scroll To Top
--------------------------------- */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* --------------------------------
   App Routes
--------------------------------- */

function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>

          {/* =========================
              HOME
          ========================== */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* =========================
              MAIN PAGES
          ========================== */}

          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/web-development"
            element={<WebDevelopment />}
          />

          <Route
            path="/app-development"
            element={<AppDevelopment />}
          />

          <Route
            path="/lead-generation"
            element={<LeadGeneration />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/team"
            element={<Team />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />
{/* blog detail */}

<Route path="/blog/:id" element={<BlogDetail />} />
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* =========================
              SERVICE PAGES
          ========================== */}

          {/* Web Development */}

          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />

          {/* Mobile Apps */}

          <Route
            path="/services/app-development"
            element={<AppDevelopment />}
          />

          {/* Lead Generation */}

          <Route
            path="/services/lead-generation"
            element={<LeadGeneration />}
          />

          {/* Social Media */}

          <Route
            path="/services/social-media-management"
            element={<SocialMediaManagement />}
          />

          {/* seo */}

          <Route
            path="/services/search-engine-optimization"
            element={<Seo />}
          />

          {/* Branding */}

          <Route
            path="/services/branding"
            element={<Branding />}
          />

          {/* AI & Analytics */}

          <Route
            path="/services/ai-analytics"
            element={<ServiceDetail />}
          />

        </Route>
      </Routes>
    </>
  );
}

/* --------------------------------
   Main App
--------------------------------- */

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;