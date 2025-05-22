import { Outlet } from "react-router";
import "./App.css";
import Cours from "./components/Cours/Cours";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Cours />
    </>
  );
}

export default App;
