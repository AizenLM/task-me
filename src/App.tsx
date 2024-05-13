import React from "react";
import "./styles/style.css";
import Index from "./pages/PresentationPage";
import Register from "./pages/register/register";
import Footer from "./components/Footer";
import IndexTaks from "./pages/ContentTask/indexTaks";

function App() {
  return (
    <div>
      <Index></Index>
      <Footer />
    </div>
  );
}

export default App;
