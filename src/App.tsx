import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import ScoutProfilePage from "./pages/ScoutProfilePage";
import ScoutDirectory from "./pages/ScoutDirectory";
import ForHuntersPage from "./pages/ForHuntersPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import HunterSignupPage from "./pages/HunterSignupPage";
import TestComponent from "./components/ui/TestComponent";
import "./App.css";

function App() {
  // Temporarily show test component to debug styling
  const showTest = window.location.search.includes("test");

  if (showTest) {
    return <TestComponent />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/scout/:scoutId" element={<ScoutProfilePage />} />
        <Route path="/scouts" element={<ScoutDirectory />} />
        <Route path="/for-hunters" element={<ForHuntersPage />} />
        <Route path="/hunter-signup" element={<HunterSignupPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
