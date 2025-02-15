import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./app/pages/Landing";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
