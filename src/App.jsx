import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";

import LandingPage from "./pages/LandingPage/LandingPage";
import TranscriptionPage from "./pages/TranscriptionPage/TranscriptionPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/play" element={<TranscriptionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
